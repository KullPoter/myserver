const mongoose = require('mongoose')
const Schema = mongoose.Schema
const orderSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    sum: {
        type:Number,
        required: true
    },
    list: [
        {
            name: {
                type: String
            },

            cost: {
                type: Number
            }
        }
    ],
})
module.exports = mongoose.model('orders', orderSchema)