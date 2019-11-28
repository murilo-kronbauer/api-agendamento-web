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
        console.log(req.body)
        const id = req.params.id || "";

        const name = req.body.name || "";
        const spec = req.body.spec || "";
        const rating = req.body.rating || "";
        var dados = {
            nome : name,
            especialidade : spec,
            nota : rating
        }

          if(name && spec && id) {
            var med = await medModel.updateOne({_id : id}, {nome : dados.nome, especialidade : dados.especialidade, nota: dados.nota});
            return res.json(med);
          } else {
            var med = await medModel.updateOne({_id : id}, {nota : dados.nota});
            console.log(dados.nota)
              return res.json(med)
          }


    },

    async delete(req, res) {
        const id = req.params.id;

        var med = await medModel.deleteOne({_id : id})

        return res.json(med)
    }






};