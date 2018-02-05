function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

var requrest = require('request');
const rootURL = 'https://api.spotify.com'

function songDetails(req, res) {
    var title = req.body.name || req.query.name;
    request(rootURL, function (err, res, body) {
        console.log(body)
    })
    var id = req.body.id
    console.log(res)
    var options = {
        url: rootURL + '/v1/tracks/' + id,
        headers: {
            'Authorization': 'Bearer ' + process.env.SPOTIFY_CLIENT_ID
        }
    }
}


module.exports = {
    songDetails
}