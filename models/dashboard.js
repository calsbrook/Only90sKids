var mongoose = require('mongoose');

var dashboardSchema = new mongoose.Schema({
    home: String,
    quiz: String,
    instructions: String,
    leaderboard: String
},
{
    timestamps: true
});

module.exports = mongoose.model('Dashboard', dashboardSchema);