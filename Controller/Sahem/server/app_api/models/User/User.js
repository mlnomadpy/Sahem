import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';


const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    emailIsConfirmed: {
        type: Boolean,
        default: false
    },
    hash: {
        type: String,
        required: true,
        default: ''

    },
    salt: {
        type: String,
        required: true,
        default: ''
    }
});

UserSchema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString('hex');

    this.hash = crypto
        .pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
        .toString('hex');
};

UserSchema.methods.validPassword = function (password) {
    const hash = crypto
        .pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
        .toString('hex');
    return this.hash === hash;
};

UserSchema.methods.generateJwt = function () {
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
    return jwt.sign({
        _id: this._id,
        email: this.email,
        name: this.name,
        exp: parseInt(expiry.getTime() / 1000),
    }, process.env.JWT_SECRET);
};

UserSchema.plugin(timestamps);
UserSchema.index({ createdAt: 1, updatedAt: 1 });
const User = mongoose.model('User', UserSchema);

module.exports = {
    User,
    UserSchema
}