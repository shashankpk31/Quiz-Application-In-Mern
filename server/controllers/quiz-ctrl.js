const Quiz= require('../models/quiz-model')

createQuiz = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a quiz',
        })
    }

    const quiz = new Quiz(body)

    if (!quiz) {
        return res.status(400).json({ success: false, error: err })
    }

    quiz.save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: quiz._id,
                message: 'Quiz created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Quiz not created!',
            })
        })
}

updateQuiz = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Quiz.findOne({ _id: req.params.id }, (err, quiz) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Quiz not found!',
            })
        }
        quiz.name = body.name
        quiz.time = body.time
        quiz.rating = body.rating
        
        quiz.save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: quiz._id,
                    message: 'Quiz updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Quiz not updated!',
                })
            })
    })
}

deleteQuiz = async (req, res) => {
    await Quiz.findOneAndDelete({ _id: req.params.id }, (err, quiz) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!quiz) {
            return res
                .status(404)
                .json({ success: false, error: `Quiz not found` })
        }

        return res.status(200).json({ success: true, data: quiz })
    }).catch(err => console.log(err))
}

getQuizById = async (req, res) => {
    await Quiz.findOne({ _id: req.params.id }, (err, quiz) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: quiz })
    }).catch(err => console.log(err))
}

getQuiz = async (req, res) => {
    await Quiz.find({}, (err, quizes) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!quizes.length) {
            return res
                .status(404)
                .json({ success: false, error: `Quizes not found` })
        }
        return res.status(200).json({ success: true, data: quizes })
    }).catch(err => console.log(err))
}

module.exports = {
    createQuiz,
    updateQuiz,
    deleteQuiz,
    getQuiz,
    getQuizById,
}
