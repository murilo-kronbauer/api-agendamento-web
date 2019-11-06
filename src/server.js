const express = require('express');
const port = process.env.PORT || 8080
const mongoose = require('mongoose')
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express()

//Set Routes
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(require('./routes'))

// Start server
mongoose.connect('mongodb+srv://admin:admin@mycluster-ltrgr.mongodb.net/clientes?retryWrites=true&w=majority', {useUnifiedTopology: true,useNewUrlParser : true}, (err)=>{
    if(err){
        console.log("NÃO CONECTADO", err);
    }  else {
        app.listen(port, () => {
            console.log("SERVER RUNNING ON PORT "+ port)
        })
    }


});



