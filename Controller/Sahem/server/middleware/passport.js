const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
require('dotenv').config();
import { User } from '../app_api/models/User/User';
// const Admin = require('../models/Admin');
// const config = require('../config/database');

// To authtenticate the User by JWT Startegy
module.exports = (passport) => {
    let opts = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET
    };
    // opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
    // opts.secretOrKey  = process.env.JWT_SECRET;
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        User.getUserById(jwt_payload._id, (err, user) => {
            if (err) return done(err, false);
            if (user) return done(null, user);
            return done(null, false);
        });
        
    }));
}