import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';

const FundSchema = new Schema({
    funder: {
        type: [Schema.Types.ObjectId],
        ref: 'Creator'
    },
    project: {
        type: [Schema.Types.ObjectId],
        ref: 'Project'
    },
    amount: {
        type: Number,
        required: true
    }
});

FundSchema.plugin(timestamps);

FundSchema.index({ createdAt: 1, updatedAt: 1 });

const Fund = mongoose.model("Fund", FundSchema);
module.exports = {
    Fund,
    FundSchema
};