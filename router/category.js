const express = require('express')
const CategoryRouts = express.Router()
const jsonParser = express.json()
const passport = require('passport')
const upload = require('../middleware/upload')
const Category = require('../contolers/category')
const { jwt } = require('../config/keys')
// passport.authenticate('jwt', {session: false}),
CategoryRouts.get('/category', Category.getComplex)

CategoryRouts.get('/category/:id', Category.getComplexid)
CategoryRouts.delete('/position/get/:id',jsonParser, Category.delComplexid)

CategoryRouts.post('/category' ,jsonParser, Category.postComplex)
CategoryRouts.put('/position/get/api/category',jsonParser, Category.change)
module.exports = CategoryRouts