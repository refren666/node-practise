import {IToken, Token} from "../../entity/token";
import {DeleteResult, getManager} from "typeorm";

class TokenRepository {
  public async createToken(token: any): Promise<IToken> {
    return getManager().getRepository(Token).save(token);
  }

  public async findTokenByUserId(userId: number): Promise<IToken | undefined> {
    return getManager().getRepository(Token).findOne({ userId });
  }

  public async deleteByParams(findObject: Partial<IToken>): Promise<DeleteResult> {
    return getManager().getRepository(Token).delete(findObject);
  }
}

export const tokenRepository = new TokenRepository();
