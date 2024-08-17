const jwt = require('jsonwebtoken');
const { User } = require('../models/userSchema');


const requireAuth = async  (req,res,next) =>{

    try{

    const token = req.headers.authorization

    if(!token){
        return res.status(401).json({message:"Authorization token required"})
    }
        const decoded = jwt.verify(token,process.env.JWTPRIVATEKEY)

        if (!decoded) {
			return res.status(401).json({ error: "Unauthorized - Invalid Token" });
		}

		const user = await User.findById(decoded._id).select("-password");

		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}

		req.user = user;

		next();

    }catch(error){
        console.error("Error in Authenticating User", error.message)
        res.status(401).json({error:'Request is not authorized'})
    }
}

module.exports = requireAuth