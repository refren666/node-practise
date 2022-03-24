"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const authService_1 = require("../services/authService");
const tokenService_1 = require("../services/tokenService");
class AuthController {
    async registration(req, res) {
        try {
            const data = await authService_1.authService.registration(req.body);
            res.cookie('refreshToken', data?.refreshToken, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true } // httpOnly for security (will not allow malicious JS code)
            );
            return res.json(data);
        }
        catch (e) {
            console.log(e);
        }
    }
    async logout(req, res) {
        console.log(req.get('Authorization'));
        res.clearCookie('refreshToken');
        await tokenService_1.tokenService.deleteUserTokenPair(14);
        return res.json('Ok');
    }
}
exports.authController = new AuthController();
//# sourceMappingURL=authController.js.map