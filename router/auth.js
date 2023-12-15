const express = require('express')
const AuthRouter = express.Router()
const jsonParser = express.json()
const Auth = require('../contolers/auth')
AuthRouter.post('/regist',jsonParser, Auth.regist)
AuthRouter.post('/login',jsonParser, Auth.login)

module.exports = AuthRouter