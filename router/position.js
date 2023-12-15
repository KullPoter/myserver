const express = require('express')
const Rp = express.Router()
const jsonParser = express.json()
const Pack = require('../contolers/position')
const passport = require('passport')
Rp.get('/get/:id',jsonParser ,Pack.getCategoryId)
Rp.post('/position/get',jsonParser, Pack.postPosition)

Rp.patch('/position/:id',jsonParser, Pack.putPositionId)
Rp.delete('/position/:id', Pack.delPositionId)
module.exports = Rp 