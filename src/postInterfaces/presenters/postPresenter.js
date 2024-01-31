const makePostPresenter =() => {
    return {
        success: function (response, data) {
            response.status(200).json(data);
        },
        created: function (response, data) {
            response.status(201).json(data);
        },
        error: function (response, error) {
            response.status(400).json({
                error: error.message
            });
        }
    }
}

module.exports = makePostPresenter;