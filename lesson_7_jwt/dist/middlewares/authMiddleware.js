"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const userService_1 = require("./../services/userService");
const services_1 = require("./../services");
class AuthMiddleware {
    async checkAccessToken(req, res, next) {
        try {
            const authToken = req.get('Authorization');
            if (!authToken) {
                throw new Error('No token');
            }
            const { userEmail } = services_1.tokenService.verifyToken(authToken);
            //   tokenService.verifyToken(authToken) = {
            //    userId: 7,
            //    userEmail: 'Marlboro3@mail.com',
            //    iat: 1648212421,
            //    exp: 1648298821
            //   }
            const userFromToken = await userService_1.userService.getUserByEmail(userEmail);
            if (!userFromToken) {
                throw new Error('Wrong token');
            }
            req.user = userFromToken; // extended request (object)
            next();
        }
        catch (error) {
            res.json({
                status: 400,
                message: error.message,
                tokenValue: req.get('Authorization')
            });
        }
    }
}
exports.authMiddleware = new AuthMiddleware();
//# sourceMappingURL=authMiddleware.js.map