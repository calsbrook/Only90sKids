const Question = require('../../models/question');


function getAllQuestions(req, res) {
    Question.find({}, function(err, questions) {
        res.status(200).json(questions);
    });
}

function getOneQuestion(req, res) {
    Question.findById(req.params.id, function(err, question) {
        res.status(200).json(question);
    });
}

module.exports = {
    getAllQuestions,
    getOneQuestion
}