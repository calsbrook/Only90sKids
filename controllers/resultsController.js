var request =require('request');
var Result = require('../models/result')

function resultDetails(req, res) {
    res.render('result', {title: 'Your Results'})
}

module.exports = resultDetails;