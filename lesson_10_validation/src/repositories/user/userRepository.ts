import { EntityRepository, getManager, Repository } from "typeorm";

import { IUser, User } from "../../entity/user";
import { IUserRepository } from "./userRepository.interface";

@EntityRepository(User)
class UserRepository extends Repository<User> implements IUserRepository {
  public async createUser(user: IUser): Promise<IUser> {
    return getManager().getRepository(User).save(user);
  }

  public async getUserByEmail(email: string): Promise<IUser | undefined> {
    return getManager()
      .getRepository(User)
      .createQueryBuilder("user")
      .where("user.email = :email", { email }) // DON'T DO SEARCH WITH INTERPOLATION!!!
      .andWhere("user.deletedAt IS NULL")
      .getOne();
  }

  public async getUsersByPredefinedText(): Promise<IUser[]> {
    return getManager()
      .getRepository(User)
      .createQueryBuilder("user")
      .leftJoin("Posts", "posts", "posts.userId = user.id") // left join to Posts table as posts
      .where('posts.text = "qwertyuio"')
      .getMany(); // returns users with text lol
  }

  public async updateUserById(userId: string, password: string, email: string) {
    return getManager()
      .getRepository(User)
      .update(
        { id: Number(userId) },
        {
          password,
          email,
        }
      );
  }

  public async deleteUserById(userId: string) {
    return getManager()
      .getRepository(User)
      .softDelete({ id: Number(userId) }); // soft delete will leave data about client and fill deletedAt column
  }
}
export const userRepository = new UserRepository();
