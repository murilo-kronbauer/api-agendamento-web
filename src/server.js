const express = require('express');
const app = express()
const port = process.env.PORT || 8080
const mongoose = require('mongoose')

//Set Routes
app.use(require('./routes'))

// PUT, DELETE, POST, GET

// app.get('/', (req, res) =>{
//     res.send('Deu certo')
// })


// app.post('/client', (req, res) =>{
// Salvar
// })

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



