const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    userMail: { type: String, required: true },
    userName: { type: String, required: true },
    password: { type: String, required: true }
});

module.exports.user = mongoose.model("user", UserSchema);
module.exports.accountCreationPetitions = mongoose.model("accountCreationPetitions", UserSchema);