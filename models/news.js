const mongoose = require('../db/connection')

const NewsSchema = new mongoose.Schema({
    url: String,
    title: String,
    description: String,
    date: Date,
},
{
    timestamps: true
});

const News = mongoose.model('News', NewsSchema)

module.exports = News