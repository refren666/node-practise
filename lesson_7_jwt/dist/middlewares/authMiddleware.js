"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const services_1 = require("./../services");
class AuthMiddleware {
    async checkAccessToken(req, res, next) {
        try {
            const authToken = req.get('Authorization');
            if (!authToken) {
                throw new Error('No token');
            }
            const extractedToken = authToken.split(' ')[1];
            const resp = services_1.tokenService.verifyToken(extractedToken);
            console.log('-------------------------');
            console.log(resp);
            console.log('-------------------------');
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