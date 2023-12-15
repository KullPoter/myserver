const bc = require('bcryptjs')
const jwt = require("jsonwebtoken")
const User = require('../model/users')
const keys = require('../config/keys')
const errorHandler = require('../utils/errorHandler')
module.exports.regist = async function(req,res){
    const candidant = await User.findOne({"email": req.body.email})
    if(candidant){
        //user exists
        res.status(409).json({"message":"такой email уже используется"})
    }else{
     
        try{
            const salt = bc.genSaltSync(6)

            const password = req.body.password
            const user = new User({
                "email": req.body.email,
                // "password": req.body.password,
                "password": bc.hashSync(password,salt),

                "name": req.body.name,
                "age": req.body.age
            })
            await user.save()
            res.status(201).json(201)
        }catch(err){
            errorHandler(res, err)
        }
    }
}
module.exports.login =async (req,res)=>{
    console.log(req.body)
    const candidant = await User.findOne({"email": req.body.email})
    if(candidant){
    //  check password 
    const passwordResult = bc.compareSync(req.body.password, candidant.password)
    if(passwordResult){
        const token = jwt.sign({
            "email": candidant.email,
            userId: candidant._id
        }, keys.jwt, {expiresIn: 60*60})
        res.status(200).json({
            token: `Bearer ${token}`
        })
    }else{
        res.status(401).json({message: "неверный пароль"})
    }
    }else{
        res.status(404).json({message: "Пользователь с таким email не существует"})
    }
}

