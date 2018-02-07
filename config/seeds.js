var Question = require('../models/question')
require('dotenv').config();
require('./database');

Question.create([
    {
        prompt: 'Who was the lead singer of NSYNC?',
        choice1: {
            text: 'Lance Bass'
        },
        choice2: {
            text: 'Justin Timberlake'
        },
        choice3: {
            text: 'JC Chasez'
        },
        choice4: {
            text: 'Jon Tamsut'
        },
        correctAnswer: 2
    },
    {
        choice1: {
            text: 'Hit Me Baby One More Time'
        },
        choice2: {
            text: 'Mambo No. 5'
        },
        choice3: {
            text: 'I Want It That Way'
        },
        choice4: {
            text: 'Jon Tamsut'
        },
        spotifySong: 'https://api.spotify.com/v1/tracks/7v0kHF6tXT8ekVrJAbxpph',
        correctAnswer: 3
    }
])
.then(function(quiz) {
    console.log(quiz)
    process.exit();
})
.catch(function(err) {
    console.log(`seed failed because of ${err}`)
})