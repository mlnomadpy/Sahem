import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';


export const UserSchema = new Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
});
UserSchema.plugin(timestamps);
UserSchema.index({ createdAt: 1, updatedAt: 1 });
export const User = mongoose.model('User',UserSchema);