const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    firstName : {
        type:String,
        required : true
    },
    lastName : {
        type:String,
    },
    phoneNumber : {
        type:String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
}, { timestamps : true})

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id}, process.env.JWTPRIVATEKEY,{expiresIn : "7d"})
    return token
}

const User = mongoose.model("users",userSchema);

module.exports = {User}