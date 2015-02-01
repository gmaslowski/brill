module.exports = function (app) {

    app.get('/api/health', function (request, response) {
        response.send('Hello World!');
    });
};
