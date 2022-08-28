const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    userMail: { type: String, required: true },
    userName: { type: String, required: true },
    password: { type: String, required: true }
});

module.exports = mongoose.model("user", UserSchema);