var mongoose = require('mongoose')

var questionSchema = new mongoose.Schema({ 
    prompt: String,
    choice1: {
        text: String,
        id: {
            type: Number,
            default: 1
        }
    },
    choice2: {
        text: String,
        id: {
            type: Number,
            default: 2
        }
    },
    choice3: {
        text: String,
        id: {
            type: Number,
            default: 3
        }
    },
    choice4: {
        text: String,
        id: {
            type: Number,
            default: 4
        }
    },
    correctAnswer: Number,
    spotifySong: {
        type: String,
        default: null
    }
});

module.exports = mongoose.model('Question', questionSchema);