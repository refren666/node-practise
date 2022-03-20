import jwt from "jsonwebtoken"

import {config} from "../config/config";
import {IToken} from "../entity/token";
import {tokenRepository} from "../repositories/token/tokenRepository";

class TokenService {
  public async generateTokenPair(payload: any): Promise<{ accessToken: string, refreshToken: string }> {
    try {
      const accessToken = jwt.sign(
        payload,
        config.SECRET_ACCESS_KEY as string,
        {expiresIn: '15m'}
      ); // first - what to hash, second - key word

      const refreshToken = jwt.sign(
        payload,
        config.SECRET_REFRESH_KEY as string,
        {expiresIn: '1d'}
      );

      return {
        accessToken,
        refreshToken
      }
    } catch (e: any) {
      console.log(e);
      throw new Error(e);
    }

  }

  public async saveToken(userId: number, refreshToken: string): Promise<IToken> {
    try {
      const tokenFromDb = await tokenRepository.findTokenByUserId(userId);

      if (tokenFromDb) {
        tokenFromDb.refreshToken = refreshToken;
        return tokenRepository.createToken(tokenFromDb); // refreshed token
      }

      return tokenRepository.createToken({refreshToken, userId}); // created token
    } catch (e: any) {
      console.log(e);
      throw new Error(e);
    }
  }
}

export const tokenService = new TokenService();
