const express = require('express')
const Order = require('../contolers/order')
const OrderRouts = express.Router()
const passport = require('passport')
const jsonParser = express.json()
OrderRouts.get('/order',Order.getOrder )
OrderRouts.get('/order/:id',Order.getOrderPositionId)
OrderRouts.post('/ord',jsonParser, Order.postOrder)
module.exports = OrderRouts
// /api/order/api/ord