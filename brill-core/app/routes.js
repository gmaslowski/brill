module.exports = function (app) {
    require('./controller/healthController.js')(app);
    require('./controller/ideaController.js')(app);
};

