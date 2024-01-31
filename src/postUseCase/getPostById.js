const makeGetPostById = ({ postDb }) => {
    return async function getPostById( id ) {
        try {
            const post = await postDb.findById(id);
            return post;
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = makeGetPostById;