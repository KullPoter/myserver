const express = require('express')
const path= require('path')
const app = express()
const passport = require('passport')
const mongoose = require('mongoose')
const OrderRouts = require('./router/order')
const AuthRouts = require('./router/auth')
const CategoryRouts = require('./router/category')
const PositionRout = require('./router/position')
const keys = require('./config/keys')

// app.use(express.static(__dirname + "/public"));

mongoose.connect(keys.mongodbUrl).then(()=>console.log("mongodb.connect")).catch(err=>console.log(err))
console.log(keys)
app.set("view engine", "hbs");
app.use(express.static(__dirname+"/statick"))


app.use(passport.initialize())
require('./middleware/passport')(passport)
app.use('/api', OrderRouts)
app.use('/api/order/post', OrderRouts)
app.use('/api/auth', AuthRouts)
app.use('/api/auth', AuthRouts)
app.use('/api', CategoryRouts)
app.use('/api', CategoryRouts)
// app.use('/api', CategoryRouts)
// app.use('/api', CategoryRouts)
// app.use('/api', CategoryRouts)
// app.use('/api', CategoryRouts) 
app.use('/api/position', PositionRout)
// app.use('/api', PositionRout)
// app.use('/api', PositionRout)
// app.use('/api', PositionRout)
app.get('/' ,function(req,res){
    res.render('login.hbs')
})
app.get('/regist' ,function(req,res){
    res.render('regist.hbs')
})
app.get('/category', (req,res)=>{
    res.render('category.hbs')
})
app.get('/order', (req,res)=>{
    res.render("order.hbs")
})
app.get('/history', (req,res)=>{
    res.render("history.hbs")
})
app.listen(3000, ()=>{
    console.log("Сервер успешно заработал")
})
