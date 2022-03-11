"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const post_1 = require("../entity/post");
class PostController {
    async getPostsByUserId(req, res) {
        const { userId } = req.params;
        const post = await (0, typeorm_1.getManager)()
            .getRepository(post_1.Post)
            .createQueryBuilder('post')
            .leftJoin('User', 'user', 'user.id = post.userId')
            .where('post.userId = :id', { id: Number(userId) })
            .getMany();
        res.json(post);
    }
    async updatePostTextById(req, res) {
        const { postId } = req.params;
        const { text } = req.body;
        const updatedText = await (0, typeorm_1.getManager)()
            .getRepository(post_1.Post)
            .update({ id: Number(postId) }, { text });
        res.json(updatedText);
    }
}
module.exports = new PostController();
//# sourceMappingURL=postController.js.map