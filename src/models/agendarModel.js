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
    first : {
        type:Boolean,
        default : false
    },
    motivo : {
        type : String,
        required : false
    },
    planos : {
        type: String,
        default : "Nenhum"
    }
    

 
})

module.exports = model('Agendamento', Agendas);
