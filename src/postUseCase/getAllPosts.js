const makeGetAllPosts = ({ postDb }) => {
    return async function getAllPosts() {
        try {
            const posts = await postDb.listAll();
            return posts;
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = makeGetAllPosts;