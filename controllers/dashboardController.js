var request =require('request');
var Dashboard = require('../models/dashboard');
var User = require('../models/user')
var session = require('express-session');

function dashboardDetails(req, res) {
    console.log(req.user)
    res.render('dashboard', {title: 'Dashboard', user: req.user})
}

module.exports = {
    dashboardDetails
}