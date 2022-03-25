import { COOKIE } from './../constants/cookie';
import { IUser } from './../entity/user';
import { IRequestExtended } from './../interfaces/requestExtended.interface';
import {Request, Response} from "express";

import {authService, tokenService} from "../services/";

class AuthController {
  public async registration(req: Request, res: Response) {
    try {
      const data = await authService.registration(req.body);
      res.cookie(
        'refreshToken',
        data?.refreshToken,
        { maxAge: 24 * 60 * 60 * 1000, httpOnly: true } // httpOnly for security (will not allow malicious JS code)
      );

      return res.json(data);
    } catch (e: any) {
      console.log(e);
    }
  }

  public async logout(req: IRequestExtended, res: Response): Promise<Response<string>> {
    const { id } = req.user as IUser; // user may noy be found

    res.clearCookie(COOKIE.nameRefreshToken);
    await tokenService.deleteUserTokenPair(id);

    return res.json('Ok');
  }
}

export const authController = new AuthController();
