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
    },
    horario_disponiveis : {
        type : Array,
        default : [
            "08:00:00",
            "14:00:00",
            "17:00:00"
        ]
    }
})

module.exports = model('Doctors', Medicos);