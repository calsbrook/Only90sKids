var request = require('request');
const rootURL = 'https://api.spotify.com/'
var auth = require('../config/auth')

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}
var token = auth()

function renderSongQuiz(req, res) {
    console.log('test');
    res.json("[cool, joe, hey]");
}


function songDetails(req, res) {
    console.log(token)
    var allSongs = []
    var title = req.body.name || req.query.name;
    var id = req.body.id
    var options = {
        url: rootURL + 'v1/tracks/' + '3n3Ppam7vgaVa1iaRUc9Lp',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }
    request({url: 'https://api.spotify.com/v1/users/myplay.com/playlists/3C64V048fGyQfCjmu9TIGA/tracks',
    headers: {'Authorization': 'Bearer ' + token}}, function (err, response, body){
        // var test = JSON.parse(body).items[0].track.artists[0].name
        // JSON.parse(body).items.forEach(function(element) {
        //     allSongs.push(element)
        // })
        // console.log(allSongs[0].track.album.id)

        res.render('songs/index', {title: '90s Kids', song: req.body, allSongs})        
        // console.log(songos[0].track.album)
        // console.log(songos.length)
        // console.log(songos[songos.length - 1])
        // console.log(test)
        // console.log(songos[0].track.artists[0].name)
        // return songos
    })
    request(options, function (err, response, body) {
        //var test = JSON.parse(response.body)
        // console.log(test)
    })

    
}


module.exports = {
    songDetails, renderSongQuiz
}