import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import { VoteSchema } from './Vote';

//Post schema
export const PostSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'Creator'
        // required: true
    },
    content: {
        type: String,
        // required: true
    },
    postedOn: {
        type: Date,
        default: Date.now()
    },
    votes: {
        type: [VoteSchema]
    }


});

ProjectSchema.methods.addVote = function (upVote, owner) {
    this.votes.forEach(vote => {
        if (vote.owner == owner) {
            vote.upVote == upVote;
            return;
        }
    });
    vote = new Vote({ upVote, owner });
    this.votes.push(vote);

};


PostSchema.plugin(timestamps);
PostSchema.index({ createdAt: 1, updatedAt: 1 });
export const Post = mongoose.model("Post", postSchema);
