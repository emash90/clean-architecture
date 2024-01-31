const makeDeletePost = ({ postDb }) => {
    return async function deletePost( id ) {
        try {
            const post = await postDb.remove( id );
            return post;
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = makeDeletePost;