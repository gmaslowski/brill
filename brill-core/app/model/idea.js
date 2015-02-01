var mongoose = require('mongoose');

module.exports = mongoose.model('Idea', {
    description: String
});