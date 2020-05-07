import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import { User } from './User';
import { PersonalInformationSchema } from "./PersonalInformation";

const CreatorSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        unique: true
    },
    creator_tag: {
        type: String,
        unique: true

    },
    personal_information: 
    [
        {
            first_name: {
                type: String
            },
            last_name: {
                type: String
            },
            birthday: {
                type: Date
            },
            address: {
                type: String
            }
        }
    ],
    // personal_information: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'PersonalInformation'
    // },
    payment_information: {
        type: Schema.Types.ObjectId,
        ref: 'PaymentInformation'
    },
    bio: {
        type: String,
    },
    projects: {
        type: [Schema.Types.ObjectId],
        ref: 'Project'
    },
    avatar:
        [
            {
                fieldname: { type: String },
                originalname: { type: String },
                name: { type: String },
                md5: { type: String },
                encoding: { type: String },
                mimetype: { type: String },
                destination: { type: String },
                filename: { type: String },
                path: { type: String },
                size: { type: Number },

                created_at: { type: Date, default: Date.now }
            }
        ]

});

CreatorSchema.statics.addProject = function (creator_id, project_id) {
    Creator.findOne({ _id: creator_id }).exec((err, creator) => {
        if (err || !creator) {
            return err;
        }
        creator.projects.push(project_id);
        creator.save();
    });
};

CreatorSchema.statics.deleteProject = function (creator_id, project_id) {
    Creator.findOne({ _id: creator_id }).exec((err, creator) => {
        if (err || !creator) {
            return;
        }
        creator.projects.filter(project => project != project_id);
        creator.save();
    })
}



CreatorSchema.statics.getCreatorById = function (id) {
    Creator.findById(id, (err, creator) => {
        if (err) return err;
        return creator;
    });
}
CreatorSchema.statics.getCreatorByUserId = function (id, callback) {
    const query = Creator.where({ user_id: id });

    query.find({ 'user_id': id }, 'id', callback);
};




CreatorSchema.plugin(timestamps);
CreatorSchema.index({ createdAt: 1, updatedAt: 1 });
const Creator = mongoose.model('Creator', CreatorSchema);
module.exports = {
    CreatorSchema,
    Creator
};
