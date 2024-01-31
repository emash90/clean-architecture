// postEntity/postentity.js

const buildMakePostEntity = () => {
    return function makePostEntity({
        title,
        content,
        author,
        createdAt = Date.now(),
        modifiedAt = Date.now(),
        deletedAt = null,
    } = {}) {
        if (!title) {
            throw new Error('Post must have a title.');
        }
        if (!content) {
            throw new Error('Post must have content.');
        }
        if (!author) {
            throw new Error('Post must have an author.');
        }

        return Object.freeze({
            title,
            content,
            author,
            createdAt,
            modifiedAt,
            deletedAt,
        });
    }
}

module.exports = buildMakePostEntity;
