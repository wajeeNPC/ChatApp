const router = require("express").Router();
const { User, validate} = require("../models/userSchema");
const bcrypt = require("bcrypt");


//create user
router.post("/",async(req,res)=>{
    try{
        const {error} = validate(req.body)

        if(error){
            return res.status(400).json({message:error.details[0].message});
        }

        const userFound = await User.findOne({email:req.body.email})
        if(userFound){
            return res.status(409).json({message:"The user already exist"})
        }

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password,salt);

        await User.create({...req.body,password:hashPassword}).save
        res.status(200).json({message:"User created succesfully"})

    }catch(error){
        console.log(error)
        res.status(500).json({message:"Internal Server Error"})
    }
})

module.exports = router