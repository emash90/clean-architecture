// frameworks/express/routes/postRoutes.js
const express = require('express');
const makePostController = require('../../../postInterfaces/controllers/postControllers');
const makeCreatePost = require('../../../postUseCase/createPost');
const makeDeletePost = require('../../../postUseCase/deletePost');
const makeGetAllPosts = require('../../../postUseCase/getAllPosts');
const makeGetPostById = require('../../../postUseCase/getPostById');
const makeUpdatePost = require('../../../postUseCase/updatePost');
const makePostPresenter = require('../../../postInterfaces/presenters/postPresenter');
const makePostRepository = require('../../../dataAccess/postRepository');
const makePostDb = require('../../../dataAccess/database');
const buildMakePostEntity = require('../../../postEntity/postentity'); 

const makePostEntity = buildMakePostEntity();
const makePost = makePostEntity

const postDb = makePostDb();


const postRepository = makePostRepository({ postDb });
const createPost = makeCreatePost({ postRepository, makePost });
const deletePost = makeDeletePost({ postDb });
const getAllPosts = makeGetAllPosts({ postDb });
const getPostById = makeGetPostById({ postDb });
const updatePost = makeUpdatePost({ postRepository, makePost, postDb });
const postPresenter = makePostPresenter();

const postController = makePostController({
    createPost,
    deletePost,
    getAllPosts,
    getPostById,
    updatePost,
    postPresenter,
});

const router = express.Router();

router.post('/posts', postController.createPost);
router.get('/posts', postController.getAllPosts);
router.get('/posts/:id', postController.getPostById);
router.put('/posts/:id', postController.updatePost);
router.delete('/posts/:id', postController.deletePost);

module.exports = router;
