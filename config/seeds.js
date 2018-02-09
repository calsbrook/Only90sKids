require('dotenv').config();
require('./database');
var Question = require('../models/question')

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
        imageURL: "https://i.imgur.com/FqGFXkH.png"
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
        spotifySong: '7v0kHF6tXT8ekVrJAbxpph',
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
        prompt: 'What is the infamous childhood playzone?',
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
            text: 'Jon Tamsut Loves Orange Soda'
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

    {
        prompt: 'What year did Sonic The Hedgehog debut with his own cartoon?',
        choice1: {
            text: '1998'
        },
        choice2: {
            text: '1993'
        },
        choice3: {
            text: '1995'
        },
        choice4: {
            text: "1997"
        },
        correctAnswer: 2,   
        imageURL: "https://i.imgur.com/TvgABsy.png"
    },

    {
        prompt: 'What was the first Sega Console to take a CD?',
        choice1: {
            text: 'Sega Game Gear'
        },
        choice2: {
            text: 'Sega CD'
        },
        choice3: {
            text: 'Sega Saturn'
        },
        choice4: {
            text: "Sega Genesis 32-bit"
        },
        correctAnswer: 2,   
        imageURL: "https://i.imgur.com/D3j9OVk.png"
    },

    {
        prompt: "What was the name of Sega Saturn's premier game",
        choice1: {
            text: 'Fatal Frame'
        },
        choice2: {
            text: 'Doom'
        },
        choice3: {
            text: 'Sonic and Knuckles'
        },
        choice4: {
            text: "Nights Into Dreams"
        },
        correctAnswer: 4,   
        imageURL: "https://i.imgur.com/pw6MNpL.png"
    },

    {
        prompt: 'Final Fantasy VII is considered to be ________.',
        choice1: {
            text: 'One of the best video games ever created. Whoever plays the game is eternally changed forever.'
        },
        choice2: {
            text: 'An incredible story.'
        },
        choice3: {
            text: 'An incredible achievement in the history of gaming.'
        },
        choice4: {
            text: "Obviously all of the above."
        },
        correctAnswer: 4,   
        imageURL: "https://i.imgur.com/XD1c6xe.png"
    },

    {
        prompt: 'Marc Summers was the host of a show called...',
        choice1: {
            text: 'Super Dare'
        },
        choice2: {
            text: 'Double Dad'
        },
        choice3: {
            text: 'Double Dare'
        },
        choice4: {
            text: "Duper Dudes"
        },
        correctAnswer: 3,   
        imageURL: "https://i.imgur.com/QkURG9l.png"
    },

    {
        prompt: "What is the name of the stone deity that guides players through the story in the show 'Legends of the Hidden Temple'?",
        choice1: {
            text: 'Old Wise One'
        },
        choice2: {
            text: 'Olmec'
        },
        choice3: {
            text: 'Master Yoshi'
        },
        choice4: {
            text: "Killa Cam"
        },
        correctAnswer: 2,   
        imageURL: "https://i.imgur.com/J2K0Zhs.gif"
    },

    {
        prompt: "How old is Bobby from Bobby's World?",
        choice1: {
            text: '4'
        },
        choice2: {
            text: '14'
        },
        choice3: {
            text: '3'
        },
        choice4: {
            text: "12"
        },
        correctAnswer: 1,   
        imageURL: "https://i.imgur.com/KHch0Qv.png"
    },

    {
        prompt: 'In the cartoon series "Hey Arnold", what does Helga always call Arnold?',
        choice1: {
            text: 'Scooter Neck'
        },
        choice2: {
            text: 'Turd'
        },
        choice3: {
            text: 'Football Head'
        },
        choice4: {
            text: "All of the Above"
        },
        correctAnswer: 3,   
        imageURL: "https://i.imgur.com/eXruhJ9.png"
    },

    {
        prompt: "What was the name of the revolutionary chat app that was mandatory for coolness in the early 90's?",
        choice1: {
            text: 'Morpheus'
        },
        choice2: {
            text: 'ShareBear'
        },
        choice3: {
            text: 'AOL Instant Messenger'
        },
        choice4: {
            text: "iChat"
        },
        correctAnswer: 3,   
        imageURL: "https://i.imgur.com/WCTspD1.gif"
    },

    {
        prompt: "What's the name of this All That skit?",
        choice1: {
            text: 'Baggin Saggin Barry'
        },
        choice2: {
            text: 'Good Burger'
        },
        choice3: {
            text: 'Detective Dan'
        },
        choice4: {
            text: "Everyday French With Pierre Escargot"
        },
        correctAnswer: 4,   
        imageURL: "https://i.imgur.com/34xxBbi.gif"
    },

    {
        prompt: "What were the name's of the twins in the hit cartoon series 'Rugrats'?",
        choice1: {
            text: 'Tom and Jerry'
        },
        choice2: {
            text: 'Phil and Lil'
        },
        choice3: {
            text: 'Susie and Angelica'
        },
        choice4: {
            text: "Tommy and Chuckie"
        },
        correctAnswer: 2,   
        imageURL: "https://i.imgur.com/syodOy6.png"
    },

    {
        prompt: "In the cartoon series 'Doug' what was the name of Doug's Best Friend?",
        choice1: {
            text: 'Skeeter'
        },
        choice2: {
            text: 'Turd'
        },
        choice3: {
            text: 'Norman'
        },
        choice4: {
            text: "Blue Dude"
        },
        correctAnswer: 1,   
        imageURL: "https://i.imgur.com/iB8uvPV.gif"
    },

    {
        prompt: 'What was the legendary app Kazaa used for?',
        choice1: {
            text: 'Hacking into Arcade Games'
        },
        choice2: {
            text: 'Seeding and Torrenting Music and other Mass Media'
        },
        choice3: {
            text: 'Word Processing'
        },
        choice4: {
            text: "All of the Above"
        },
        correctAnswer: 2,   
        imageURL: "https://i.imgur.com/lKJnDb4.png"
    },

    {

        prompt: "What was the first hit single from TLC's Crazy Sexy Cool album?",
        choice1: {
            text: 'Mhmm'
        },
        choice1: {
            text: 'Hit Me Baby One More Time'
        },
        choice2: {
            text: 'Creep'
        },
        choice3: {
          text: 'Red Light Special'
        },
        choice4: {
            text: 'Diggin On You'
        },
        spotifySong: "1aWV3uY3SIEZVbmv45oFWS",
        correctAnswer: 2
    },
    
    {
        prompt: "Who played this song?",
        choice1: {
            text: 'Radiohead'
        },
        choice2: {
            text: 'Dave Matthews Band'
        },
        choice3: {
            text: 'Weezer'
        },
        choice4: {
            text: 'P.O.D.'
        },
        spotifySong: "6b2oQwSGFkzsMtQruIWm2p",
        correctAnswer: 1
    },

    {
        prompt: "Who played this song?",
        choice1: {
            text: "Brittany's Experiment"
        },
        choice2: {
            text: 'Brittany Spearmint'
        },
        choice3: {
            text: 'Brittany Spears'
        },
        choice4: {
            text: 'Mandi Moore'
        },
        spotifySong: "3MjUtNVVq3C8Fn0MP3zhXa",
        correctAnswer: 3
    },
    
    {
        prompt: "Who's notorious for the party anthem 'This Is How We Do It'?",
        choice1: {
            text: "Tevin Campbell"
        },
        choice2: {
            text: 'Montell Jordan'
        },
        choice3: {
            text: 'Aries Spears'
        },
        choice4: {
            text: 'Coolio'
        },
        spotifySong: "6uQKuonTU8VKBz5SHZuQXD",
        correctAnswer: 2
    },

    {
        prompt: "Who's the lead singer of the band 'No Doubt'?",
        choice1: {
            text: "Christina Aguillera"
        },
        choice2: {
            text: 'Emily Haines'
        },
        choice3: {
            text: 'Gwen Stefani'
        },
        choice4: {
            text: 'Janet Jackson'
        },
        spotifySong: "0cQbJU1aAzvbEmTuljWLlF",
        correctAnswer: 3
    },

    {
        prompt: "Which Red Hot Chili Peppers album holds the song 'Californication'?",
        choice1: {
            text: "Hot Damn"
        },
        choice2: {
            text: 'By The Way'
        },
        choice3: {
            text: 'Blood Sugar Sex Magik'
        },
        choice4: {
            text: 'Californication [Deluxe Version]'
        },
        spotifySong: "48UPSzbZjgc449aqz8bxox",
        correctAnswer: 4
    },
    
    {
        prompt: "Who made this song?",
        choice1: {
            text: "SClub7"
        },
        choice2: {
            text: 'Spice Girls'
        },
        choice3: {
            text: 'One Direction'
        },
        choice4: {
            text: 'Zayn Malik who Jacksters Loves Very Much'
        },
        spotifySong: "1Je1IMUlBXcx1Fz0WE7oPT",
        correctAnswer: 2
    },
    
    {
        prompt: "What's the name of this song?",
        choice1: {
            text: "Bush - Razorblade Suitcase"
        },
        choice2: {
            text: 'Nirvana - Smells Like Teen Spirit'
        },
        choice3: {
            text: 'Semisonic - Closing Time'
        },
        choice4: {
            text: 'Jimi Hendrix - Watchtower'
        },
        spotifySong: "087OBLtoeS3Q6j0k6tMNAI",
        correctAnswer: 2
    },
    


    
    
    
])
.then(function(quiz) {
    console.log(quiz)
    process.exit();
})
.catch(function(err) {
    console.log(`seed failed because of ${err}`)
})