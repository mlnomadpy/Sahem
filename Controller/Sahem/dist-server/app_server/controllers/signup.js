"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUser = void 0;

var _User = require("../../app_api/models/User/User");

var _crypto = require("../crypto");

var createUser = function createUser(res, rej) {
  var _req$body = req.body,
      email = _req$body.email,
      username = _req$body.username,
      password = _req$body.password,
      confirmPassword = _req$body.confirmPassword; // TODO sanatize the inputs here
  // TODO check the strength of the password
  // TODO check the email if valid
  // Check if the password and confirm password fields match

  if (password === confirmPassword) {
    // Check if user with the same email is also registered
    if (_User.User.find({
      username: username,
      email: email
    })) {
      res.render('register', {
        message: 'User already registered.',
        messageClass: 'alert-danger'
      });
      return;
    } // hash the password using sha256 then base64


    var hashedPassword = (0, _crypto.getHashedPassword)(password); // Store user into the database if you are using one

    users.push({
      username: username,
      email: email,
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
};

exports.createUser = createUser;