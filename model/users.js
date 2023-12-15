const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
    email: {
        type: String,
        require: true,
        unoque: true
    },
    password: {
        type: String,
        require: true,
       
    },
    name: {
        type: String,
        require: true,
       
    },
    age: {
        type: Number,
        require: true,
       
    }
})

module.exports = mongoose.model('users', userSchema)