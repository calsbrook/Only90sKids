var request =require('request');
var Instruction = require('../models/instruction')

function instructionDetails(req, res) {
    res.render('instruction', {title: 'Instructions'})
}

module.exports = instructionDetails;