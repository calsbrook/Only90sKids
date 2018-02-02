var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: String,
    score: Number,
    email: String,
    avatar: String,
    handle: String,
    googleId: String
},
{
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);