
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const Joi = require('joi')
const passwordComplexity = require('joi-password-complexity')

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
})

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id}, process.env.JWTPRIVATEKEY,{expiresIn : "7d"})
    return token
}

const User = mongoose.model("users",userSchema);

const validate = (data) =>{
    const schema = Joi.object({
        firstName : Joi.string().required().label("First Name"),
        lastName : Joi.string().label("Last Name"),
        phoneNumber : Joi.string().required().label("Phone number"),
        email : Joi.string().required().label("Email"),
        password : Joi.string().required().label("Password"),
    })

    return schema.validate(data)
};

module.exports = {User,validate}