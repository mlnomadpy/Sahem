import mongoose from "mongoose";
import { User } from '../../app_api/models/User/User';
import { getHashedPassword } from "../crypto";

const createUser = (res, rej) => {

    const { email, username, password, confirmPassword } = req.body;
    // TODO sanatize the inputs here
    // TODO check the strength of the password
    // TODO check the email if valid
    // Check if the password and confirm password fields match
    if (password === confirmPassword) {

        // Check if user with the same email is also registered
        if ( User.find({ username: username, email: email }) ) {

            res.render('register', {
                message: 'User already registered.',
                messageClass: 'alert-danger'
            });

            return;
        }
        // hash the password using sha256 then base64
        const hashedPassword = getHashedPassword(password);

        // Store user into the database if you are using one
        users.push({
            username,
            email,
            password: hashedPassword
        });

        res.render('login', {
            message: 'Registration Complete. Please login to continue.',
            messageClass: 'alert-success'
        });
    } else {
        res.render('register', {
            message: 'Password does not match.',
            messageClass: 'alert-danger'
        });
    }

}
export default createUser;