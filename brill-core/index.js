var express = require('express');
var mongoose = require('mongoose');

var port = process.env.PORT || 3000;

// Connect to mongodb
var connect = function () {
    var options = {server: {socketOptions: {keepAlive: 1}}};
    mongoose.connect('mongodb://localhost/brill', options);
};

mongoose.connection.on('error', console.log);
mongoose.connection.on('disconnected', connect);

connect();

var Schema = mongoose.Schema;
var IdeaSchema = new Schema({
    description: String
});

var IdeaModel = mongoose.model('ideas', IdeaSchema);

var app = express();

app.get('/api/ideas', function (request, response) {
    return IdeaModel.find(function (err, products) {
        if (!err) {
            return response.send(products);
        } else {
            return console.log(err);
        }
    });
});

app.get('/api/ideas/:id', function (request, response) {
    return IdeaModel.findById(request.params.id, function (err, product) {
        if (!err) {
            return response.send(product);
        } else {
            return console.log(err);
        }
    });
});

app.get('/', function (request, response) {
    response.send('Hello World!');
});

app.listen(port, function () {
    console.log("Node app is running at localhost:" + port);
});

module.exports = app;
