const mongoose = require('mongoose');

const schema = mongoose.Schema;

const UserSchema = new Schema({
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
const UserModel = mongoose.model('User',UserSchema);
module.exports = {
    UserModel,
    UserSchema
};