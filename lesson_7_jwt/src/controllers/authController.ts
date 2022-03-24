import {Request, Response} from "express";

import {authService} from "../services/authService";
import {tokenService} from "../services/tokenService";

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

  public async logout(req: Request, res: Response): Promise<Response<string>> {
    console.log(req.get('Authorization'));
    res.clearCookie('refreshToken');
    await tokenService.deleteUserTokenPair(14);

    return res.json('Ok');
  }
}

export const authController = new AuthController();
