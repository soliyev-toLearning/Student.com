const { Schema, model } = require('mongoose')

const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    group: {
        type: Number,
        required: true
    },
    month: {
        type: Number,
        required: true
    },
    score: {
        type: Number,
        required: true
    }
})

module.exports = model('people', studentSchema)