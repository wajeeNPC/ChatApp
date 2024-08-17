const express = require("express");
const { signupUser,loginUser } = require('../controller/userAuthController')
const router = express.Router()

//login Route
router.post('/login',loginUser)

//register route
router.post('/signup',signupUser)



module.exports = router