// usecases/userUseCases.js
const makeCreatePost = require('../postUseCase/createPost');
const makeGetAllPosts = require('../postUseCase/getAllPosts');
const makeUpdatePost = require('../postUseCase/updatePost');
const makeDeletePost = require('../postUseCase/deletePost');
const makeGetPostById = require('../postUseCase/getPostById');


module.exports = {
    createPost: makeCreatePost,
    getAllPosts: makeGetAllPosts,
    updatePost: makeUpdatePost,
    deletePost: makeDeletePost,
    getPostById: makeGetPostById
}
