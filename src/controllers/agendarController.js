const axios = require('axios');
const agendarModel = require('../models/agendarModel');

module.exports = {


    async index(req, res){
         
        const agendar = await agendarModel.find({});
        return res.json(agendar)
    },

    async create(req, res) {
      console.log(req.body);
      
         const agendar = await agendarModel.create({
             data : req.body.date,
             nomePaciente : req.body.namePacient,
             medico : req.body.medico,
             first : req.body.first,
             motivo : req.body.motivo,
             planos : req.body.planos
         })

        return res.json(agendar);
    },

    async put(req, res) {
        const id = req.params.idAgendamento;
        const data = req.body.date;
        const nomePaciente = req.body.namePacient;
        const idMedico = req.body.idMedico;
        const first = req.body.first;
        const motivo = req.body.motivo;
        const planos = req.body.planos;

        if(idMedico) {
            var agendar = await agendarModel.update({_id : id},
                {data : data,nomePaciente : nomePaciente, first : first, motivo : motivo, planos : planos,
                 medico : {_id:idMedico}});
                 console.log("Com medico")
        } else {
            var agendar = await agendarModel.update({_id : id},
                {data : data,nomePaciente : nomePaciente, first : first, motivo : motivo, planos : planos});
                console.log("Sem médico")
        }
       

        return res.json(agendar);

    },

    async delete(req, res) {
        const id = req.params.id;

        var agendar = await agendarModel.deleteOne({_id : id})

        return res.json(agendar);
    }

}