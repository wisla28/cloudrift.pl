const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    message: String,
    createdAt: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', MessageSchema);
module.exports = Message;
