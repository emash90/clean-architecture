// data-access/postRepository.js
function makePostRepository({ postDb }) {
    return Object.freeze({
        create: async function (post) {
            return postDb.insert(post);
        },
        remove: async function (id) {
            return postDb.remove(id);
        },
        listAll: async function () {
            return postDb.listAll();
        },
        findById: async function (id) {
            return postDb.findById(id);
        },
        update: async function (post) {
            return postDb.update(post);
        },
    });
}

module.exports = makePostRepository;
