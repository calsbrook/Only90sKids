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
        correctAnswer: 2,   
        imageURL: "http://coolguys.com/"
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
    },
    {
        prompt: 'What was the name of the show in which the Midnight Society would tell stories around a campfire?',
        choice1: {
            text: 'Salute Your Shorts'
        },
        choice2: {
            text: 'Goosebumps'
        },
        choice3: {
            text: 'Are You Afraid of the Dark?'
        },
        choice4: {
            text: 'Legends of the Hidden Temple'
        },
        correctAnswer: 3,   
        imageURL: "https://i.imgur.com/cUr1J8z.png"
    },
    {
        prompt: 'What is the infamous childhood placezone for kids?',
        choice1: {
            text: 'Discovery Zone'
        },
        choice2: {
            text: 'X Place'
        },
        choice3: {
            text: 'Moms House'
        },
        choice4: {
            text: 'Six Flags'
        },
        correctAnswer: 1,   
        imageURL: "https://i.imgur.com/31WAYBh.png"
    },
    {
        prompt: 'Who was Doug Funny in love with in the animated series Doug?',
        choice1: {
            text: 'Angelica Pickles'
        },
        choice2: {
            text: 'Patty Mayonaise'
        },
        choice3: {
            text: 'Miss Piggy'
        },
        choice4: {
            text: 'Olga'
        },
        correctAnswer: 2,   
        imageURL: "https://i.imgur.com/awchuim.png"
    },
    {
        prompt: 'Who Loves Orange Soda?',
        choice1: {
            text: 'Jon Tamsut Love Orange Soda'
        },
        choice2: {
            text: 'I Completely Have No Idea'
        },
        choice3: {
            text: 'Kel Loves Orange Soda'
        },
        choice4: {
            text: "Rocko Loves Orange Soda"
        },
        correctAnswer: 3,   
        imageURL: "https://i.imgur.com/vD5F6bo.gif"
    },
    {
        prompt: 'Which show is home to the infamous Camp Anawanna?',
        choice1: {
            text: 'Salute Your Shorts'
        },
        choice2: {
            text: 'Clarissa'
        },
        choice3: {
            text: 'All That'
        },
        choice4: {
            text: "Rocko's Modern Life"
        },
        correctAnswer: 1,   
        imageURL: "https://i.imgur.com/WWFFTZT.png"
    },
    

    
])
.then(function(quiz) {
    console.log(quiz)
    process.exit();
})
.catch(function(err) {
    console.log(`seed failed because of ${err}`)
})