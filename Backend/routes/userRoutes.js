const express = require("express");
const { getContacts } = require('../controller/userController')
const router = express.Router()
const requireAuth = require('../middleware/requireAuth')

//getting user contacts
router.get('/contacts',requireAuth,getContacts)


module.exports = router