import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';

export const ConversationSchema = new Schema({
    messages: {
        type: [Schema.Types.ObjectId],
        ref: 'Message'
    },
    participants: {
        type: [Schema.Types.ObjectId],
        ref: 'Fundraiser'
    }
});
ConversationSchema.plugin(timestamps);
ConversationSchema.index({ createdAt: 1, updatedAt: 1 });

export const Conversation = mongoose.model('Conversation', ConversationSchema);
