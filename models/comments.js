const mongoose = require('../db/connection')

const CommentsSchema = new mongoose.Schema({
    author: String, 
    text: String, 
    datePosted: {type: Date, default: Date.now}
},
{
    timestamps: true
})

const Comments = mongoose.model('Comments', CommentsSchema)
module.exports = Comments