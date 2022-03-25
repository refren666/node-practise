"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenRepository = void 0;
const token_1 = require("../../entity/token");
const typeorm_1 = require("typeorm");
class TokenRepository {
    async createToken(token) {
        return (0, typeorm_1.getManager)().getRepository(token_1.Token).save(token);
    }
    async findTokenByUserId(userId) {
        return (0, typeorm_1.getManager)().getRepository(token_1.Token).findOne({ userId });
    }
    async deleteByParams(findObject) {
        return (0, typeorm_1.getManager)().getRepository(token_1.Token).delete(findObject);
    }
}
exports.tokenRepository = new TokenRepository();
//# sourceMappingURL=tokenRepository.js.map