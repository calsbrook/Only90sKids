var quizSchema = new mongoose.Schema({
    score: Number,
    question: String,
    options: [String],
    content: String,
    correctanswer: String,
},
{
    timestamps: true
});

module.exports = mongoose.model('Quiz', quizSchema);