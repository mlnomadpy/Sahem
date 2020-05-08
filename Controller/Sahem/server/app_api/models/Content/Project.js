import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';

// const Fundraiser = require('../User/fundraiser').fundRaiserSchema;
import { VoteSchema, Vote } from './Vote';
import { Comment } from './Comment';
// import { Fund } from '../fund/fund';
import { Creator } from '../User/Creator';
//Project schema
export const ProjectSchema = new Schema({
    title: {
        type: String,
        // required: true
    },
    category: {
        type: String,
        // required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'Creator'
        // required: true
    },
    content: {
        type: String,
    },
    description: {
        type: String,
    },
    fundGoal: {
        type: Number,
    },
    raisedFunds: {
        type: Number,
        default: 0
    },
    // createdDate: {
    //     type: Date,
    //     default: Date.now()
    // },
    endDate: {
        type: Date,
    },
    funders: [
        {
            _id: {
                type: Schema.Types.ObjectId
            },
            funder: {
                type: Schema.Types.ObjectId,
            },
            project: {
                type: Schema.Types.ObjectId,
            },
            amount: {
                type: Number,
            }
        }
    ],
    votes: {
        type: [VoteSchema]
    },
    comments: {
        type: [Schema.Types.ObjectId],
        ref: 'Comment'
    },
    header_image: [
        {
            fieldname: { type: String },
            name: { type: String },
            md5: { type: String },
            originalname: { type: String },
            encoding: { type: String },
            mimetype: { type: String },
            destination: { type: String },
            filename: { type: String },
            path: { type: String },
            size: { type: Number },

            created_at: { type: Date, default: Date.now }
        }
    ],
    thumbnail: [
        {
            fieldname: { type: String },
            name: { type: String },
            md5: { type: String },
            originalname: { type: String },
            encoding: { type: String },
            mimetype: { type: String },
            destination: { type: String },
            filename: { type: String },
            path: { type: String },
            size: { type: Number },

            created_at: { type: Date, default: Date.now }
        }
    ],
    // medias: {
    //     type: [Media]
    // }

});

//comment methods
ProjectSchema.methods.getComments = function () {
    Comment.find({ '_id': { "$in": this.comments } }, (err, comments) => {
        if (err) return err;
        return comments;
    });
};

ProjectSchema.methods.addComment = function (_id) {
    if (!_id) {
        return;
    }
    this.comments.push(_id);
};

ProjectSchema.methods.deleteComment = function (_id) {
    this.comments = this.comments.filter(function (comment, index, arr) {
        return comment._id != _id;
    });
    //TODO delete comment from the comments collection
    // array.filter(function(value, index, arr){ return value > 5;});
};

//fund methods
ProjectSchema.methods.addFunder = function (fund) {

    this.funders.push(fund);
    this.raisedFunds += fund.amount;
    // Fund.find({ 'project': this._id }, (err, funds) => {
    //     if (err) return;
    //     funds.forEach(fund => {
    //         this.raisedFunds += fund.amount;
    //     });
    // });
};

// ProjectSchema.method.getFunders = function () {
//     Fund.find({ '_id': { "$in": this.funders } }, (err, funders) => {
//         if (err) {
//             return err;
//         }
//         return funders;
//     });
// }

ProjectSchema.method.getProjectsByCategory = function (category) {
    Project.find({ 'category': category }, (err, projects) => {
        if (err) {
            return err;
        }
        return projects;
    });
}

//TODO change the vote to the new vote value
ProjectSchema.methods.checkVote = function (owner) {
    this.votes.forEach(vote => {
        if (vote.owner == owner) {
            return true;
        }
    });
    return false
};
ProjectSchema.methods.deleteVote = function (owner) {
    this.votes = this.votes.filter(function (vote, index, arr) {
        return vote.owner != owner;
    });
};

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

ProjectSchema.plugin(timestamps);

ProjectSchema.index({ createdAt: 1, updatedAt: 1 });

const Project = mongoose.model("Project", ProjectSchema);
module.exports = {
    Project,
    ProjectSchema
};