const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Quiz = new Schema(
    {
        questiontxt: { type: String, required: true },
        choice: { type: [String], required: true },
        answer: { type: String, required: true },
        subject: { type: String, required: true },
        time: { type: String, required: true }
    },
    { timestamps: true },
)


module.exports = mongoose.model('quizes', Quiz)
