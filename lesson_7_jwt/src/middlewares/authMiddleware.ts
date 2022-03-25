import { userService } from './../services/userService';
import { NextFunction, Request, Response } from 'express';

import { tokenService } from './../services';

class AuthMiddleware {
  public async checkAccessToken(req: Request, res: Response, next: NextFunction) {
    try {
      const authToken = req.get('Authorization');

      if (!authToken) {
        throw new Error('No token');
      }  

      const { userId, userEmail } = tokenService.verifyToken(authToken);

//   tokenService.verifyToken(authToken) = {
//    userId: 7,
//    userEmail: 'Marlboro3@mail.com',
//    iat: 1648212421,
//    exp: 1648298821
//   }
      
      const userFromToken = await userService.getUserByEmail(userEmail);

      next();
    } catch (error: any) {
      res.json({
        status: 400,
        message: error.message,
        tokenValue: req.get('Authorization')
      })
    }
  }
}

export const authMiddleware = new AuthMiddleware();
