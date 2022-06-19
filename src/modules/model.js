const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const usrSchema = new Schema({
    usuario: String,
    passw: String
})

const users_fb1 = mongoose.model('users_fb1', usrSchema)

module.exports = users_fb1;