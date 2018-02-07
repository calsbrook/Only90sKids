var request = require('request');
const rootURL = 'https://api.spotify.com/v1'
var Song = require('../models/song')

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

// function renderSongQuiz(req, res) {
//     console.log('test');
//     res.json("[cool, joe, hey]");
// }


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
//     request({
//         url: 'https://accounts.spotify.com/api/token',
//         method: 'POST', 
//         headers: {
//             'Authorization': 'Basic NTVkOWQxOWViZjI3NDQ3ZmEzMTI0N2MwNTc0ZmY4YTI6ODYwOThmZGY3NmFkNDM5N2EwOGE2YWQ2ZTM5YjliYTg='
//         },
//         form: 'grant_type=client_credentials'
//     }, function (err, response, body) {
//         let token = JSON.parse(response.body).access_token
//         request({url: `${rootURL}/`)
//     })
// }


module.exports = {
    songDetails
}