const mongoose = require('mongoose')

const SportSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Player name is required"],
        minLength: [3, "Player name must be at least three characters"]
    },
    position: {
        type: String
    },
    gameOne: {
        type: String,
        enum: ["Playing", "Not Playing", "Undecided"],
        default: "Undecided"
    },
    gameTwo: {
        type: String,
        enum: ["Playing", "Not Playing", "Undecided"],
        default: "Undecided"
    },
    gameThree: {
        type: String,
        enum: ["Playing", "Not Playing", "Undecided"],
        default: "Undecided"
    }
}, {timestamps: true})

module.exports = mongoose.model("Sport", SportSchema)