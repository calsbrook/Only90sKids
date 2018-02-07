var request = require('request');
var env = require('dotenv');
var getToken = function(cb) {
    request({
        url: 'https://accounts.spotify.com/api/token',
        method: 'POST', 
        headers: {
            'Authorization': 'Basic NTVkOWQxOWViZjI3NDQ3ZmEzMTI0N2MwNTc0ZmY4YTI6ODYwOThmZGY3NmFkNDM5N2EwOGE2YWQ2ZTM5YjliYTg='
        },
        form: 'grant_type=client_credentials'
    },
    function (err, response, body) {
        cb(body)
        return body
    });
}

module.exports = getToken;