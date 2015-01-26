var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var IdeaSchema = new Schema({
    description: String
});

var Idea = mongoose.model('ideas', IdeaSchema);