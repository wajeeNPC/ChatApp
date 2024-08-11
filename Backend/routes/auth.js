const router = require("express").Router();
const { User } = require("../models/userSchema");
const Joi = require("joi")
const bcrypt = require("bcrypt")


router.post("/login",async(req,res)=>{
    try{

        const {error} = validate(req.body)

        if(error){
            return res.status(400).json({message:error.details[0].message})
        }

        const userFound = await User.findOne({email: req.body.email})

        if(!userFound){
            return res.status(401).json({message: "Invalid Email"})
        }

        const validPassword = await bcrypt.compare(req.body.password,userFound.password)

        if(!validPassword){
            return res.status(401).json({message:"Invalid Password"})
        }

        const token = userFound.generateAuthToken();
        res.status(200).json({"token":token})


    }catch(error){
        console.log(error)
        res.status(500).json({message:"Internal Server Error"})
    }
})

const validate =(data) =>{
    const schema = Joi.object({
        email:Joi.string().email().required().label("Email"),
        password:Joi.string().required().label("Password")
    });
    return schema.validate(data)
}



module.exports = router