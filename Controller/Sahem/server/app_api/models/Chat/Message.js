import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';

export const MessageSchema = new Schema({
    sent_time: {
        type: Date.now
    },
    receive_time: {
        type: Date
    },
    read_time: {
        type: Date
    },
    read_by: {
        type: [mongoose.Types.ObjectId],
        ref: 'Fundraiser'
    },
    delivered_to: {
        type: [mongoose.Types.ObjectId],
        ref: 'Fundraiser'
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'Fundraiser'
    }
});
MessageSchema.plugin(timestamps);
MessageSchema.index({ createdAt: 1, updatedAt: 1 });
export const Message = mongoose.model('Message', MessageSchema);
