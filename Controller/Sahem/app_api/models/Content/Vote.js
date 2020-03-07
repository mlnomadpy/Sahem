const mongoose = require('mongoose');
const FundRaiser = require('../User/fundraiser');
const schema = mongoose.Schema;

const VoteSchema = new Schema({
    upVote: {
        type: Boolean,
        required: true
    },
    timeOfVote: {
        type: Date,
        default: Date.now
    },
    owner: {
        type: FundRaiser,
        required: true
    },
    parent: {
        Article: {
            type: ObjectId
        },
        articleType: {
            type: String
        }
    }
})