var request = require('request');
const rootURL = 'https://api.spotify.com/'
var Song = require('../models/song')

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

function renderSongQuiz(req, res) {
    console.log('test');
    res.json("[cool, joe, hey]");
}


function songDetails(req, res) {
        request({
            url: 'https://accounts.spotify.com/api/token',
            method: 'POST', 
            headers: {
                'Authorization': 'Basic NTVkOWQxOWViZjI3NDQ3ZmEzMTI0N2MwNTc0ZmY4YTI6ODYwOThmZGY3NmFkNDM5N2EwOGE2YWQ2ZTM5YjliYTg='
            },
            form: 'grant_type=client_credentials'
        },
            function (err, response, body) {
                let token = JSON.parse(response.body).access_token
                console.log(`this be the token ${token}`)
                request({url: 'https://api.spotify.com/v1/users/myplay.com/playlists/3C64V048fGyQfCjmu9TIGA/tracks',
                headers: {'Authorization': 'Bearer ' + token}}, 
                function (err, response, body){
                    var allSongs = []
                    var title = req.body.name || req.query.name;
                    JSON.parse(body).items.forEach(function(element) {
                        allSongs.push(element)
                    })
                    res.render('songs/index', {title: '90s Kids', song: req.body, allSongs})
                }
            );
    }
)
    
    // var id = req.body.id
    // var options = {
    //     url: rootURL + 'v1/tracks/' + '3n3Ppam7vgaVa1iaRUc9Lp',
    //     headers: {
    //         'Authorization': 'Bearer ' + token
    //     }
    // }
    // request({url: 'https://api.spotify.com/v1/users/myplay.com/playlists/3C64V048fGyQfCjmu9TIGA/tracks',
    // headers: {'Authorization': 'Bearer ' + token}}, function (err, response, body){
    //     // var test = JSON.parse(body).items[0].track.artists[0].name
    //     JSON.parse(body).items.forEach(function(element) {
    //         allSongs.push(element)
    //     })
    //     // console.log(allSongs[0].track.album.id)
    //     res.render('songs/index', {title: '90s Kids', song: req.body, allSongs})        
        // console.log(songos[0].track.album)
        // console.log(songos.length)
        // console.log(songos[songos.length - 1])
        // console.log(test)
        // console.log(songos[0].track.artists[0].name)
        // return songos
//     })
//     request(options, function (err, response, body) {
//         //var test = JSON.parse(response.body)
//         // console.log(test)
//     })
}


module.exports = {
    songDetails, renderSongQuiz
}