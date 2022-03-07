"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const user_1 = require("./entity/user");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
app.get('/users', async (req, res) => {
    try {
        const users = await (0, typeorm_1.getManager)().getRepository(user_1.User).find();
        console.log(users);
        res.json(users);
    }
    catch (err) {
        console.log(err);
    }
});
// app.post('/users', async (req:Request, res:Response) => {
//   console.log(req.body);
//   const createdUser = await getManager().getRepository(User).save(req.body);
//   res.json(createdUser);
// });
app.listen(7000, async () => {
    console.log('Server started!');
    try {
        const connection = await (0, typeorm_1.createConnection)();
        if (connection) {
            console.log('Database connected');
        }
    }
    catch (e) {
        console.log(e);
    }
});
//# sourceMappingURL=app.js.map