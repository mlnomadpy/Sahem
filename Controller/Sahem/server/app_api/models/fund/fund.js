import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';

const FundSchema = new Schema({
    funder: {
        type: Schema.Types.ObjectId,
        ref: 'Creator',
        // required: true
    },
    project: {
        type: Schema.Types.ObjectId,
        ref: 'Project',
        // required: true
    },
    amount: {
        type: Number,
        // required: true
    },
    customer: {},
    charge: {}

});

FundSchema.plugin(timestamps);

FundSchema.index({ createdAt: 1, updatedAt: 1 });

const Fund = mongoose.model("Fund", FundSchema);
module.exports = {
    Fund,
    FundSchema
};