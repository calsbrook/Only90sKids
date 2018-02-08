var request =require('request');
var Dashboard = require('../models/dashboard')

function dashboardDetails(req, res) {
    res.render('dashboard', {title: 'Dashboard'})
}

module.exports = dashboardDetails;