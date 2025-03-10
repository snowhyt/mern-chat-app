import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: trusted
    },

    message:{
        type: String,
        required: true
    }
    //createdAt, updateAt => message.createdAt :13:00
},{timestamps: true});

const Message = mongoose.model("Message", messageSchema);

export default Message;