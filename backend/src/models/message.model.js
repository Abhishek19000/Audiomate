import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId: { type: String, required: true }, //clerkId
    receiverId: { type: String, required: true }, //clerkId
    content: { type: String, required: true },
}, { timestamps: true } // CreatedAt and UpdatedAt
);

export const Message = mongoose.model("Message", messageSchema);