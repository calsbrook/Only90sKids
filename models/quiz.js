var quizSchema = new mongoose.Schema({
    name: String,
    score: Number,
    questions: [String],
    answers: [String],
    content: String,
},
{
    timestamps: true
});

module.exports = mongoose.model('Quiz', quizSchema);