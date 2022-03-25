import { NextFunction, Request, Response } from 'express';

import { tokenService } from './../services';

class AuthMiddleware {
  public async checkAccessToken(req: Request, res: Response, next: NextFunction) {
    try {
      const authToken = req.get('Authorization');

      if (!authToken) {
        throw new Error('No token');
      }  
      
      const extractedToken = authToken.split(' ')[1];

      const resp = tokenService.verifyToken(extractedToken);

      console.log('-------------------------');
      console.log(resp);
      console.log('-------------------------');

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
