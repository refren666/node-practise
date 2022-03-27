import { NextFunction, Response } from "express";

import { authValidator } from "./../validators/";
import { tokenRepository } from "./../repositories/token/tokenRepository";
import { IRequestExtended } from "./../interfaces";
import { userService, tokenService } from "./../services";
import { variables } from "../constants";
import { ErrorHandler } from "../error/errorHandler";

class AuthMiddleware {
  public async checkAccessToken(
    req: IRequestExtended,
    res: Response,
    next: NextFunction
  ) {
    try {
      const accessToken = req.get(variables.AUTHORIZATION);

      if (!accessToken) {
        next(new ErrorHandler("Token is invalid!", 401));
        return;
      }

      const { userEmail } = tokenService.verifyToken(accessToken);

      //   tokenService.verifyToken(authToken) = {
      //    userId: 7,
      //    userEmail: 'Marlboro3@mail.com',
      //    iat: 1648212421, // created
      //    exp: 1648298821 // expires
      //   }

      const tokenPairFromDB = await tokenRepository.findByParams({
        accessToken,
      });

      if (!tokenPairFromDB) {
        next(new ErrorHandler("Token is invalid!", 401));
        return;
      }

      const userFromToken = await userService.getUserByEmail(userEmail);

      if (!userFromToken) {
        next(new ErrorHandler("Wrong token", 401));
        return;
      }

      req.user = userFromToken; // extended request (object)

      next();
    } catch (error: any) {
      res.status(401).json({
        status: 401,
        message: error.message,
        tokenValue: req.get(variables.AUTHORIZATION),
      });
    }
  }

  public async checkRefreshToken(
    req: IRequestExtended,
    res: Response,
    next: NextFunction
  ) {
    try {
      const refreshToken = req.get(variables.AUTHORIZATION);

      if (!refreshToken) {
        next(new ErrorHandler("Token is invalid!", 401));
        return;
      }

      const { userEmail } = tokenService.verifyToken(refreshToken, "refresh");

      //   tokenService.verifyToken(authToken) = {
      //    userId: 7,
      //    userEmail: 'Marlboro3@mail.com',
      //    iat: 1648212421, // created
      //    exp: 1648298821 // expires
      //   }

      // search if token exists in DB
      const tokenPairFromDB = await tokenRepository.findByParams({
        refreshToken,
      });

      if (!tokenPairFromDB) {
        next(new ErrorHandler("Token is invalid!", 401));
        return;
      }

      const userFromToken = await userService.getUserByEmail(userEmail);

      if (!userFromToken) {
        next(new ErrorHandler("Wrong token", 401));
        return;
      }

      req.user = userFromToken; // extended request (object); transfer user next
      next();
    } catch (error: any) {
      res.status(401).json({
        status: 401,
        message: error.message,
        tokenValue: req.get(variables.AUTHORIZATION),
      });
    }
  }

  // JOI VALIDATOR
  public isRegistrationValid(
    req: IRequestExtended,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { error, value } = authValidator.registration.validate(req.body);

      console.log(value);

      if (error) {
        next(new ErrorHandler(error.details[0].message, 400));
        return;
      }

      req.body = value;

      next();
    } catch (e) {
      next(e);
    }
  }

  public isLoginValid(
    req: IRequestExtended,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { error, value } = authValidator.login.validate(req.body); // validates email and password

      console.log(value); // value same as req.body but value can be TRIMMED with JOI

      if (error) {
        next(new ErrorHandler(error.details[0].message, 400));
        return;
      }

      req.body = value;

      next();
    } catch (e) {
      next(e);
    }
  }
}

export const authMiddleware = new AuthMiddleware();
