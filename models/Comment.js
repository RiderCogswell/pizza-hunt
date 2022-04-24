const { Schema, model } = require('mongoose');

const CommentSchema = new Schema ({
    writtenBy: {
        type: String,
        required: 'Please enter an author name!'
    },
    commentBody: {
        type: String,
        required: 'No input!'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}) 

// create comment model using the comment schema 
const Comment = model('Comment', CommentSchema) 

module.exports = Comment;