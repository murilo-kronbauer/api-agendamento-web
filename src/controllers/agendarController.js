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
             medico : req.body.medico
         })

        return res.json(agendar);
    },

    async put(req, res) {
        const id = req.params.idAgendamento;
        const data = req.body.date;
        const nomePaciente = req.body.namePacient;
        const idMedico = req.body.idMedico;

        if(idMedico) {
            var agendar = await agendarModel.update({_id : id},
                {data : data,nomePaciente : nomePaciente, 
                 medico : {_id:idMedico}});
                 console.log("com medico")
        } else {
            var agendar = await agendarModel.update({_id : id},
                {data : data,nomePaciente : nomePaciente});
                console.log("sem médico")
        }
       

        return res.json(agendar);

    },

    async delete(req, res) {
        const id = req.params.id;

        var agendar = await agendarModel.deleteOne({_id : id})

        return res.json(agendar);
    }

}