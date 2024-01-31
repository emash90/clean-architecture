// data-access/postDb.js
const connectDB = require("./db");
const PostModel = require("./postModel");
const makeId = require("../postEntity/Id")

connectDB();
function makePostDb() {
    const Id = makeId();
    



    const insert = async (post) => {
        const newPost = new PostModel({ uniqueId: Id, ...post });
        await newPost.save();
        return newPost.toObject();
    };

    const remove = async (id) => {
        const result = await PostModel.deleteOne({ _id: id });
        return result.deletedCount > 0 ? { id } : null;
    };

    const listAll = async () => {
        return PostModel.find({}).lean();
    };

    const findById = async (id) => {
        console.log('db id', id);
        return PostModel.findById(id).lean();
    };

    const update = async (post) => {
        console.log('db post', post);
        const result = await PostModel.updateOne(
            { _id: post.id },
            { $set: { 
                title: post.title,
                content: post.content,
                author: post.author,
                modifiedAt: Date.now()
            } }
        );
        return result.modifiedCount > 0 ? post : null;
    };

    return {
        insert,
        remove,
        listAll,
        findById,
        update,
    };
}

module.exports = makePostDb;
