const express = require('express')

const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.port || 3000

const AddressValidatorController = require('./controllers/addressvalidator.ctrl')

app.use(bodyParser.json())
app.get('/addresses', AddressValidatorController.processRequest);


app.listen(PORT, (err, res) => {
    if(!err){
        console.log(`App asfasdas on ${PORT}`)
    }
})