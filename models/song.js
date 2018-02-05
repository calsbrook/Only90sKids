var mongoose = require('mongoose');

var songSchema = new mongoose.Schema({
    title: String,
    spotifyId: String,
    artist: String,
    year: Number
},
{
    timestamps: true
});

module.exports = mongoose.model('Song', songSchema);