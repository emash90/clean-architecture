const makeCreatePost = ({ postRepository, makePost }) => {
    return async function createPost(postInfo) {
        const postEntity = makePost(postInfo);
        const post = await postRepository.create(postEntity);
        return post;   
    }
}

module.exports = makeCreatePost;