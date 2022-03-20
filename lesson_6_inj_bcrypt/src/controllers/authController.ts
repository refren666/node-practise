import {Request, Response} from "express";

import {authService} from "../services/authService";

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
    } catch (e) {

    }

  }
}

export const authController = new AuthController();
