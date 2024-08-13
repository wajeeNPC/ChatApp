const {User} = require('../models/userSchema')
const bcrypt = require("bcrypt");
const Joi = require("joi")


//Register user
const signupUser = async (req, res) => {
    try {
        const { error } = validate(req.body);

        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        const userFound = await User.findOne({ email: req.body.email });
        if (userFound) {
            return res.status(409).json({ message: "The user already exists" });
        }

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        await User.create({ ...req.body, password: hashPassword });
        return res.status(201).json({ message: "User created successfully" });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

//login user

const loginUser = async (req,res) =>{
    try{

        const {error} = validateLogin(req.body)

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
        res.status(200).json({ "userId": userFound._id ,"token":token})


    }catch(error){
        console.log(error)
        res.status(500).json({message:"Internal Server Error"})
    }
}

//validate login user data
const validateLogin = (data) =>{
    const schema = Joi.object({
        email:Joi.string().email().required().label("Email"),
        password:Joi.string().required().label("Password")
    });
    return schema.validate(data)
}

//validate signup user data
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



module.exports = {signupUser,loginUser}