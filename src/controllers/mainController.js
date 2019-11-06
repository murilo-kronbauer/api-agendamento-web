const axios = require('axios');
const medModel = require('../models/medModel');

module.exports = {

    // GET (RETORNA OS MÉDICOS)
    async index(req, res){
         
        const med = await medModel.find({});
        return res.json(med)
    },

    // POST (CRIA MÉDICO)
    async create(req, res) {
        var data = req.body;
        console.log(data);

        var med = await medModel.create({
            nome: data.name,
            especialidade:data.spec,
            nota : data.rating
        });

        return res.json(med);
    },

    // PUT (ALTERA OS MÉDICOS)
    async put(req, res) {
        const id = req.params.id;
        console.log(id);
        const nome = req.body.name;
        const especialidade = req.body.spec;
        const nota = req.body.rating;
        const med = await medModel.update(
            {_id : id},
            {nome : name, especialidade : spec, nota : rating}
        );

        return res.json(med);

    }






};