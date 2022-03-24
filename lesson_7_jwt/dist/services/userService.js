"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const userRepository_1 = require("../repositories/user/userRepository");
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserService {
    async createUser(user) {
        const { password } = user; // extracting password for hashing
        const hashedPassword = await UserService._hashPassword(password);
        const dataToSave = { ...user, password: hashedPassword }; // in user object, reassigning password for hashed one
        return userRepository_1.userRepository.createUser(dataToSave);
    }
    async getUserByEmail(email) {
        return userRepository_1.userRepository.getUserByEmail(email);
    }
    static async _hashPassword(password) {
        return bcrypt_1.default.hash(password, 10); // 10 - level of salt = higher lvl means stronger hashing
    }
}
exports.userService = new UserService();
//# sourceMappingURL=userService.js.map