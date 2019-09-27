const mongoose = require('../db/connection')

const CommentsSchema = new mongoose.Schema({
    author: String, 
    text: String, 
    datePosted: {type: Date, default: Date.now}
},
{
    timestamps: true
})

const NewsSchema = new mongoose.Schema({
    children: [CommentsSchema],
    url: String,
    title: String,
    description: String,
    date: {type:Date, default: Date.now},
    //comment: {type: Object, default: null }
},
{
    timestamps: true
});


const News = mongoose.model('News', NewsSchema)

module.exports = News