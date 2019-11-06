const axios = require('axios');
const medModel = require('../models/medModel');

module.exports = {

    async index(req, res) {
        var data = req.body;
        console.log(data);

        var med = await medModel.create({
            nome: data.name,
            especialidade: data.spec
        });

        return res.json(med);
    },

    async put(req, res) {

    }






};