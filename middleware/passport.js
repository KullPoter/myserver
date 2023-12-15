const passport = require('passport');
const keys = require('../config/keys');
const { Strategy } = require('passport-jwt');
const mongoose = require('mongoose')
const User = mongoose.model('users')
var JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt;
var option = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : keys.jwt
}
module.exports = passport =>{
    passport.use(
        new JwtStrategy(option, async(payload, done)=>{
           try{   
            const user =await User.findById(payload.userId).select('email id')
            if(user){
                done(null, user)
            }else{
                done(null, false)
            }
           }
           catch(err){
            console.log(err)
           }
        })
    )
}