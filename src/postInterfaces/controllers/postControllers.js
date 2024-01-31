const makePostControllers = ({ createPost, deletePost, getAllPosts, getPostById, updatePost, postPresenter }) => {
    return {
        createPost: async (req, res) => {
            console.log(req.body);
            const { title, content, author } = req.body;
            try {
                const createdPost = await createPost({ title, content, author })
                postPresenter.created(res, createdPost)
            } catch (error) {
                postPresenter.error(res, error)
            }
        },
        getAllPosts: async (req, res) => {
            try {
                const posts = await getAllPosts()
                postPresenter.success(res, posts)
            } catch (error) {
                postPresenter.error(res, error)
            }
        },
        getPostById: async (req, res) => {
            try {
                console.log(req.params.id);
                const post = await getPostById(req.params.id)
                postPresenter.success(res, post)
            } catch (error) {
                postPresenter.error(res, error)
            }
        },
        updatePost: async (req, res) => {
            try {
                const updatedPost = await updatePost({ id: req.params.id, ...req.body })
                postPresenter.success(res, updatedPost)
            } catch (error) {
                postPresenter.error(res, error)
            }
        },
        deletePost: async (req, res) => {
            try {
                const deletedPost = await deletePost(req.params.id)
                postPresenter.success(res, deletedPost)
            } catch (error) {
                postPresenter.error(res, error)
            }
        }
    }
}

module.exports = makePostControllers;