import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';

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


});
PostSchema.plugin(timestamps);
PostSchema.index({ createdAt: 1, updatedAt: 1 });
export const Post = mongoose.model("Post", postSchema);
