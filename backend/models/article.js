const mongoose = require('mongoose');
const { Schema } = mongoose;

const ArticleSchema = new Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    author: { type: String, required: true},
    date: { type: Date, required: true },
    imageName: { type: String, required: false}
});

module.exports = mongoose.model("Article", ArticleSchema);