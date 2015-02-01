var mongoose = require('mongoose');

module.exports = function (app) {

    app.get('/api/health', function (request, response) {
        var appState = {
            brillRunning: 'OK',
            mongodb: mongoose.connection.readyState === 1 ? 'OK' : 'NOT_OK'
        };

        response.send(appState);
    });
};
