import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';

import { PersonalInformationSchema } from "./PersonalInformation";

export const CreatorSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    personal_information: {
        type: Schema.Types.ObjectId,
        ref: 'PersonalInformation'
    },
    payment_information: {
        type: Schema.Types.ObjectId,
        ref: 'PaymentInformation'
    },
    address: {
        type: String,
    },
    projects: {
        type: [Schema.Types.ObjectId],
        ref: 'Project'
    }
});
FundraiserSchema.plugin(timestamps);
FundraiserSchema.index({ createdAt: 1, updatedAt: 1 });
export const Fundraiser = mongoose.model('Fundraiser', fundRaiserSchema);
