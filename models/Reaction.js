const { Schema, model } = require('mongoose')
const Date = require('../utils/Date')


const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            manlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => formatDate(timestamp),
        }
    }, {
        toJSON: {
            getters: true,
        },
    }
)

module.exports = reactionSchema