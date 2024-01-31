const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    uniqueId: Number,
    author: String,
    title: String,
    content: String,
    createdAt: { type: Date, default: Date.now },
    modifiedAt: { type: Date, default: Date.now },
    deletedAt: { type: Date, default: null }
});

const PostModel = mongoose.model('Post', postSchema);

module.exports = PostModel;