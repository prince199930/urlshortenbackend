const mongoose = require("mongoose");
const { Schema } = mongoose;

const UrlSchema = new Schema({
    urlId: {
        type: String,
        required: true,
    },
    origUrl: {
        type: String,
        required: true,
    },
    shortUrl: {
        type: String,
        required: true,
    },
    clicks: {
        type: Number,
        required: true,
        default: 0,
    },
    date: {
        type: String,
        default: Date.now,
    },
});

module.exports = mongoose.model("url", UrlSchema);