"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const comment_1 = require("../entity/comment");
class CommentController {
    async getCommentsAndPostsOfUserById(req, res) {
        try {
            const { userId } = req.params;
            const postWithComments = await (0, typeorm_1.getManager)()
                .getRepository(comment_1.Comment)
                .createQueryBuilder('comment')
                .leftJoinAndSelect('comment.user', 'user')
                .leftJoinAndSelect('comment.post', 'post')
                .where(`comment.authorId = :id`, { id: Number(userId) }) // :id parameter name and id: Number(userId) - its value
                .getMany();
            res.json(postWithComments);
        }
        catch (err) {
            console.log(err);
        }
    }
    async addLikeOrDislike(req, res) {
        const { commentId, action } = req.body;
        const comment = await (0, typeorm_1.getManager)()
            .getRepository(comment_1.Comment)
            .createQueryBuilder('comment')
            .where('comment.id = :id', { id: Number(commentId) })
            .getOne();
        if (!comment) {
            throw new Error('Comment id does not exist!');
        }
        if (action === 'like') {
            await (0, typeorm_1.getManager)().getRepository(comment_1.Comment).update({ id: commentId }, { like: comment.like + 1 });
        }
        if (action === 'dislike') {
            await (0, typeorm_1.getManager)().getRepository(comment_1.Comment).update({ id: commentId }, { dislike: comment.dislike + 1 });
        }
        res.json(comment);
    }
}
module.exports = new CommentController();
//# sourceMappingURL=commentController.js.map