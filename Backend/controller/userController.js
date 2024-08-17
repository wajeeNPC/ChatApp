const { User } = require('../models/userSchema')
const { Conversation } = require('../models/conversationSchema');


const getContacts = async (req,res) =>{

    try{

        const loggedInUser = req.user._id

        const allConversations = await Conversation.find({
            participants: loggedInUser,
        });

        const contacts = new Set();
    
        //adding the loggedIn user ID also to contacts
        allConversations.forEach((conversation) => {
            conversation.participants.forEach((participant) => {
                contacts.add(participant.toString());
            });
        });

        const contactsArray = Array.from(contacts);

        const populatedContacts = await User.find({ _id: { $in: contactsArray } },'firstName lastName');

        res.status(200).json(populatedContacts)


    }catch(error){
        console.error("Error in getting contacts for user", error.message)
        res.status(500).json({error: "Internal server error"})
    }

}

module.exports = {getContacts}