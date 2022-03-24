import {userService} from "./userService";
import {tokenService} from "./tokenService";
import {IUser} from "../entity/user";

class AuthService {
  public async registration(body: IUser) {
    try {
      const { email } = body; // extracting email to check whether user already exists

      const userFromDb = await userService.getUserByEmail(email);

      if (userFromDb) {
        throw new Error(`User with email: ${email} already exists`);
      }

      const createdUser = await userService.createUser(body);
      return this._getTokenData(createdUser);

    } catch (e: any) {
      console.log(e);
      throw new Error(e);
    }
  }

  private async _getTokenData(userData: IUser) {
    try {
      const { id, email } = userData;
      const tokenPair = await tokenService.generateTokenPair({ userId: id, userEmail: email });
      await tokenService.saveToken(
        id,
        tokenPair.refreshToken
      ); // filling table with token data

      return {
        ...tokenPair,
        userId: id,
        userEmail: email
      }
    } catch (e) {
      console.log(e);
    }
  }
}

export const authService = new AuthService();
