var express = require('express');
var mongoose = require('mongoose');

var port = process.env.PORT || 3000;

// Connect to mongodb
var connect = function () {
    var options = {server: {socketOptions: {keepAlive: 1}}};
    mongoose.connect('mongodb://localhost/brill', options, function (err, res) {
        if (err) {
            console.log('ERROR connecting to MongoDB.. ' + err);
        } else {
            console.log('Successfully connected to MongoDB.');
        }
    });
};

mongoose.connection.on('error', console.log);
mongoose.connection.on('disconnected', connect);

connect();

var Schema = mongoose.Schema;
var IdeaSchema = new Schema({
    description: String
});

var Idea = mongoose.model('ideas', IdeaSchema);

var app = express();

app.listen(port, function () {
    console.log("Node app is running at localhost:" + port);
});

module.exports = app;
