const medModel = require('./medModel');
const {Schema, model} = require('mongoose');

const Agendas = new Schema({
    data : {
        type : Date,
        required : true
    },
    nomePaciente : {
        type: String,
        required: true
    },
    medico : [{
        type: Schema.Types.ObjectId,
        ref: medModel,
        required: true
    }],
})

module.exports = model('Agendamento', Agendas);
