const { Conversation } = require('../models/conversationSchema');
const { Message } = require('../models/messageSchema')


const sendMessage = async (req,res) =>{
    try{

        const { message } = req.body;
        const recieverId = req.params.id;
        const senderId = req.user._id

        let conversation = await Conversation.findOne({
            participants : { $all : [senderId, recieverId]},
        })

        if(!conversation){
            conversation = await Conversation.create({
                participants : [senderId, recieverId],
            })
        }

        const newMessage = await Message.create({senderId,recieverId,message})

        if(newMessage){
             conversation.messages.push(newMessage._id)
             await conversation.save();
        }



        res.status(200).json({message: newMessage})


    }catch(error){
        console.error("Error in sending message", error.message)
        res.status(500).json({error:"Internal server error"})
    }
}


const getMessages = async (req,res) =>{
    try{
        const userToChatId = req.params.id;
        const senderId = req.user._id;

        const conversation  = await Conversation.findOne({
            participants : { $all : [senderId,userToChatId]} 
        }).populate("messages")

        console.log(conversation)

        res.status(200).json(conversation.messages)

    }catch(error){
        console.error("Error in getting messages", error.message)
        res.status(500).json({error:"Internal server error"})
    }
}

module.exports = {sendMessage,getMessages}