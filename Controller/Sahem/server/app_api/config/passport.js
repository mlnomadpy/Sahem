import passport from 'passport';
import passportLocal from 'passport-local';
const LocalStrategy = passportLocal.Strategy;
import mongoose from 'mongoose';
const User = mongoose.model('User');
passport.use(new LocalStrategy({
    usernameField: 'username'
},
    (username, password, done) => {
        User.findOne({ username: username }, (err, user) => {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, {
                    message: 'Incorrect username.'
                });
            }
            if (!user.validPassword(password)) {
                return done(null, false, {
                    message: 'Incorrect password.'
                });
            }
            return done(null, user);
        });
    }
));