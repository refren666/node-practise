"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const userService_1 = require("./userService");
const tokenService_1 = require("./tokenService");
class AuthService {
    async registration(body) {
        try {
            const { email } = body; // extracting email to check whether user already exists
            const userFromDb = await userService_1.userService.getUserByEmail(email);
            if (userFromDb) {
                throw new Error(`User with email: ${email} already exists`);
            }
            const createdUser = await userService_1.userService.createUser(body);
            return this._getTokenData(createdUser);
        }
        catch (e) {
            console.log(e);
            throw new Error(e);
        }
    }
    async _getTokenData(userData) {
        try {
            const { id, email } = userData;
            const tokenPair = await tokenService_1.tokenService.generateTokenPair({ userId: id, userEmail: email });
            await tokenService_1.tokenService.saveToken(id, tokenPair.refreshToken); // filling table with token data
            return {
                ...tokenPair,
                userId: id,
                userEmail: email
            };
        }
        catch (e) {
            console.log(e);
            throw new Error(e);
        }
    }
}
exports.authService = new AuthService();
//# sourceMappingURL=authService.js.map