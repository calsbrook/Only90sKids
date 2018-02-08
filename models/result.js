var mongoose = require('mongoose');

var resultSchema = new mongoose.Schema({
    correct: Number,
    incorrect: Number,
    score: Number
},
{
    timestamps: true
});

module.exports = mongoose.model('Result', resultSchema);