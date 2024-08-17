const express = require("express");
const router = express.Router()
const requireAuth = require('../middleware/requireAuth')

const {sendMessage,getMessages} = require('../controller/messageController')

//send message route
router.post('/send/:id',requireAuth,sendMessage)

//get messages route
router.get('/:id',requireAuth,getMessages)


module.exports = router