var Idea = require('../model/idea.js');

module.exports = function (app) {

    app.get('/api/ideas', function (request, response) {
        return Idea.find(function (err, products) {
            if (!err) {
                return response.send(products);
            } else {
                return console.log(err);
            }
        });
    });

    app.get('/api/ideas/:id', function (request, response) {
        return Idea.findById(request.params.id, function (err, product) {
            if (!err) {
                return response.send(product);
            } else {
                return console.log(err);
            }
        });
    });

    app.post('/api/ideas', function (request, response) {
        console.log(request.body);

        if (!(request.body.hasOwnProperty('description'))) {
            response.statusCode = 400;
            return response.send('Error 400: Post syntax incorrect.');
        }

        var createdIdea = new Idea({
            description: request.body.description
        });

        createdIdea.save(function (err) {
            if (err) console.log('Error on save!')
        });

        response.send(createdIdea);
    });
};