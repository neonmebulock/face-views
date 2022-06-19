const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: false}))

app.use(bodyParser.json())

const port = process.env.PORT || 3000;


const uri = `mongodb+srv://${process.env.USER1}:${process.env.PASSWORD1}@data1.kwmka1q.mongodb.net/${process.env.DBNAME1}?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(console.log('conectado'))
    .catch(e => console.log(e))

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));


app.use('/', require('./router/router'));

app.use('/login', require('./router/bsRou'));

app.listen(port, () => {
    console.log('skdakjsd')
})