var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    score: Number,
    email: String,
    avatar: String,
    handle: String,
    googleId: String,
    completedQuestions: [{ type: Schema.Types.ObjectId, ref: 'Question'}]
},
{
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);