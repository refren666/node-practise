"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const cookie_1 = require("./../constants/cookie");
const services_1 = require("../services/");
class AuthController {
    async registration(req, res) {
        try {
            const data = await services_1.authService.registration(req.body);
            res.cookie('refreshToken', data?.refreshToken, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true } // httpOnly for security (will not allow malicious JS code)
            );
            return res.json(data);
        }
        catch (e) {
            console.log(e);
        }
    }
    async logout(req, res) {
        const { id } = req.user; // user may noy be found
        res.clearCookie(cookie_1.COOKIE.nameRefreshToken);
        await services_1.tokenService.deleteUserTokenPair(id);
        return res.json('Ok');
    }
}
exports.authController = new AuthController();
//# sourceMappingURL=authController.js.map