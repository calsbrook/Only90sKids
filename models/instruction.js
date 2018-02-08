var mongoose = require('mongoose');

var instructionSchema = new mongoose.Schema({
    dashboard: String,
    quiz: String
},
{
    timestamps: true
});

module.exports = mongoose.model('Instruction', instructionSchema);