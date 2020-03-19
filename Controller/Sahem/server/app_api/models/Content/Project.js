import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';

// const Fundraiser = require('../User/fundraiser').fundRaiserSchema;
import { VoteSchema } from "./Vote";
//Project schema
export const ProjectSchema = new Schema({
    category: {
        type: String
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'Fundraiser',
        // required: true
    },
    content: {
        type: String,
        // required: true
    },
    description: {
        type: String,
        // required: true
    },
    fundGoal: {
        type: Number,
        // required: true
    },
    raisedFunding: {
        type: Number,
        default: 0
    },
    createdDate: {
        type: Date,
        default: Date.now()
    },
    endDate: {
        type: Date,
        // required: true  
    },
    fundraisers: {
        type: [Schema.Types.ObjectId],
        ref: 'Creator',
        default: null
    },
    votes: {
        type: [VoteSchema]
    },
    comments: {
        type: [Schema.Types.ObjectId],
        ref: 'Comment'
    },
    // medias: {
    //     type: [Media]
    // }

});
ProjectSchema.plugin(timestamps);

ProjectSchema.index({ createdAt: 1, updatedAt: 1 });

export const Project = mongoose.model("Project", ProjectSchema);
