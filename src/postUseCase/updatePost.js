const makeUpdatePost = ({ postRepository, makePost }) => {
    return async function updatePost ({ id, ...postInfo }) {
        const post = await postRepository.update({ id, ...postInfo });
        return post;
    }
}

module.exports = makeUpdatePost;