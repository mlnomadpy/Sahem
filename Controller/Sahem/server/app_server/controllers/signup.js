import passport from 'passport';
import mongoose from 'mongoose';
import User from './../../app_api/models/User/User';
// const User = mongoose.model('User');
const createUser = (req, res) => {

    if (!req.body.username || !req.body.email || !req.body.password) {
        return res
            .status(400)
            .json({ "message": "All fields required" });
    }

    //check if the password are matches
    if (!(req.body.password === req.body.confirmPassword)) {
        return res
            .status(400)
            .json({ "message": "Password does not match" });
    }
    //TODO check if the user exist
    // if (checkUserExist(req.body.email, req.body.username)) {
    //     return res
    //         .status(400)
    //         .json({
    //             message: 'User already registered.',
    //             messageClass: 'alert-danger'
    //         });
    // }
    //TODO save the user in db
    const user = new User();
    user.username = req.body.username;
    user.email = req.body.email;
    user.setPassword(req.body.password);
    user.save(
        (err) => {
            if (err) {
                res
                    .status(404)
                    .json(err);
            }

            else {
                const token = user.generateJwt();
                res
                    .status(200)
                    .json({ token });
            }
        }
    );

}

const passwordCheck = ({ email, username, password, confirmPassword }) => {
    // check if the password == the confirmPassword
    if (password == confirmPassword) {
        checkUserExist({ email, username, password });
    }
    else {
        res.json({
            message: 'Password does not match.',
            messageClass: 'alert-danger'
        });
    }
}

const checkUserExist = ({ email, username }) => {
    //find out if the user already exist in the database
    //find by username
    User.findOne({ username: username }, (err, user) => {
        if (err) {
            return done(err);
        }
        if (user) {
            return done(null, false, {
                message: 'Username already in use.'
            });
        }
    });
    User.findOne({ email: email }, (err, user) => {
        if (err) {
            return done(err);
        }
        if (user) {
            return done(null, false, {
                message: 'Email already in use.'
            });
        }
    });

}
const saveUser = ({ email, username, password }) => {
    //TODO hash the password then push


    // Store user into the database if you are using one



    res.json({
        message: 'Registration Complete. Please login to continue.',
        messageClass: 'alert-success'
    });
}
module.exports = {
    createUser
};