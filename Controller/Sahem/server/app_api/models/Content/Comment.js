import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import VoteSchema from './Vote';
export const CommentSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'Creator',
    },
    content: {
        type: String
    },
    votes: {
        type: [VoteSchema]
    },
    origin_post: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
    },
    origin_project: {
        type: Schema.Types.ObjectId,
        ref: 'Article'
    }
    // origin_comment: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Comment'
    // },
    // subcomments_count: {
    //     type: Number,
    //     default: 0
    // }
});
CommentSchema.plugin(timestamps);
CommentSchema.index({ createdAt: 1, updatedAt: 1 });
export const Comment = mongoose.model('Comment', CommentSchema);
