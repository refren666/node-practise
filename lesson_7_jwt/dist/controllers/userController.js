"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const user_1 = require("../entity/user");
const userService_1 = require("../services/userService");
class UserController {
    async getUsersWithSpecificText(req, res) {
        try {
            // const users = await getManager().getRepository(User).findOne({ where: { firstName: 'Taras' } });
            // const users = await getManager().getRepository(User).find({ relations: ['posts'] }); // posts will not be shown without relations
            // const users = await getManager().getRepository(User)
            //   .createQueryBuilder('user')
            //   .where('user.firstName = "Taras"')
            //   .getOne()
            const users = await (0, typeorm_1.getManager)().getRepository(user_1.User)
                .createQueryBuilder('user')
                .leftJoin('Posts', 'posts', 'posts.userId = user.id') // left join to Posts table as posts
                .where('posts.text = "lol"')
                .getMany(); // returns users with text lol
            return res.json(users);
        }
        catch (err) {
            console.log(err);
        }
    }
    async createUser(req, res) {
        const createdUser = await userService_1.userService.createUser(req.body);
        return res.json(createdUser);
    }
    async getUserByEmail(req, res) {
        const { email } = req.params;
        const user = await userService_1.userService.getUserByEmail(email);
        return res.json(user);
    }
    async updateUserEmailAndPasswordById(req, res) {
        const { password, email } = req.body;
        const { userId } = req.params;
        const createdUser = await (0, typeorm_1.getManager)().getRepository(user_1.User).update({ id: Number(userId) }, {
            password,
            email
        });
        res.json(createdUser);
    }
    async deleteUserById(req, res) {
        const { userId } = req.params;
        const deletedUser = await (0, typeorm_1.getManager)()
            .getRepository(user_1.User)
            .softDelete({ id: Number(userId) }); // soft delete will leave data about client and fill deletedAt column
        res.json(deletedUser);
    }
}
module.exports = new UserController();
//# sourceMappingURL=userController.js.map