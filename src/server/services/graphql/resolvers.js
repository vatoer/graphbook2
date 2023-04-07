import logger from "../../helpers/logger";

export default function resolver() {
    const { db } = this;
    const { Post, User } = db.models;

    const resolvers = {
        Post: {
            user(post, args, context) {
                return post.getUser();
            },
        },
        RootQuery: {
            posts(root, args, context) {
                const posts = Post.findAll({ order: [['createdAt', 'DESC']] });
                return posts;
            },
        },
        RootMutation: {
            addPost(root, { post, user }, context) {
                return User.findAll().then((users) => {
                    const usersRow = users[0];

                    return Post.create({
                        ...post,
                    }).then((newPost) => {
                        return Promise.all([
                            newPost.setUser(usersRow.id),
                        ]).then(() => {
                            logger.log({
                                level: 'info',
                                message: 'Post was created',
                            });
                            return newPost;
                        })
                    })
                })
            }
        }
    };

    return resolvers;
}