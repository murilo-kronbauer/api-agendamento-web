const {Schema, model} = require('mongoose')

const Medicos = new Schema({
    nome : {
        type: String,
        required: true
    },
    especialidade : {
        type: String,
        required: true
    },
    nota : {
        type: Number,
        required: true
    }
})