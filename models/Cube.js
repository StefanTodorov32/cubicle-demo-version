const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const cubeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxLength: 50,
    },
    imageUrl: {
        type: String,
        require: true,
    },
    difficultyLevel: {
        type: Number,
        require: true,
        max: 6,
        min: 1,
    },
//     accessories: {},
});

const Cube = model('Cube', cubeSchema)

module.exports = Cube