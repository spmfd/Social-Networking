const { Schema, model } = require('mongoose')
const Date = require('../utils/Date')
const reactionSchema = require('./Reaction')

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => formatDate(timestamp)
        },
        
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    }, {
        toJSON: {
            getters: true,
        },
    }
);

thoughtSchema.virtual('reactionCount').get(function (){
    return this.reactions.length
});

const Thought = model('thought', userSchema);

module.exports = Thought;