// express
var express = require('express');
var app = express();

var bodyParser = require('body-parser');

// mongoose
var mongoose = require('mongoose');
var mongodb = require('./app/config/mongodb.js')

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Connect to mongodb
var connect = function () {
    var options = {server: {socketOptions: {keepAlive: 1}}};
    mongoose.connect(mongodb.url, options, function (err, res) {
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

require('./app/routes.js')(app);

app.listen(port, function () {
    console.log("Node app is running at localhost:" + port);
});

module.exports = app;
