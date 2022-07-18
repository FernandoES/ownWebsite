const mongoose = require('mongoose');
const { Schema } = mongoose;

const SuggestionSchema = new Schema({
    userName: { type: String, required: true },
    userMail: { type: String, required: true },
    body: { type: String, required: true },
    date: { type: Date, required: true}
});

module.exports = mongoose.model("Suggestion", SuggestionSchema);