import {IUser} from "../entity/user";
import {userRepository} from "../repositories/user/userRepository";
import bcrypt from 'bcrypt';

class UserService {
  public async createUser(user: IUser): Promise<IUser> {
    const {password} = user; // extracting password for hashing
    const hashedPassword = await UserService._hashPassword(password);
    const dataToSave = { ...user, password: hashedPassword }; // in user object, reassigning password for hashed one

    return userRepository.createUser(dataToSave);
  }

  public async getUserByEmail(email: string): Promise<IUser | undefined> {
    return userRepository.getUserByEmail(email);
  }

  private static async _hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10); // 10 - level of salt = higher lvl means stronger hashing
  }
}

export const userService = new UserService();
