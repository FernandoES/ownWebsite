const mongoose = require('mongoose');
const { Schema } = mongoose;

const SuggestionSchema = new Schema({
    authorName: { type: String, required: true },
    authorMail: { type: String, required: true },
    body: { type: String, required: true },
    date: { type: Date, required: true}
});

module.exports = mongoose.model("Suggestion", SuggestionSchema);