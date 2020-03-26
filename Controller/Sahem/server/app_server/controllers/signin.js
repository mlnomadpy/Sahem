import passport from 'passport';
import mongoose from "mongoose";
import { User } from '../../app_api/models/User/User';

const login = (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res
            .status(400)
            .json({ "message": "All fields required" });
    }
    passport.authenticate('local', (err, user, info) => {
        let token;
        if (err) {
            return res
                .status(404)
                .json(err);
        }
        if (user) {
            token = user.generateJwt();
            res
                .status(200)
                .json({ token });
        } else {
            res
                .status(401)
                .json(info);
        }
    })(req, res);
};
module.exports = {
    login
};