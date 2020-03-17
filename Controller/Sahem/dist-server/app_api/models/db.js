"use strict";

var mongoose = require('mongoose');

var dbURI = 'mongodb://localhost/sahem';
mongoose.connect(dbURI, {
  useNewUrlParser: true
});
mongoose.connection.on('connected', function () {
  console.log("Mongoose connected to ".concat(dbURI));
});
mongoose.connection.on('error', function (err) {
  console.log("Mongoose connection error: ".concat(err));
});
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose disconnected');
});

var gracefulShutdown = function gracefulShutdown(msg, callback) {
  mongoose.connection.close(function () {
    console.log("Mongoose disconnected through ".concat(msg));
    callback();
  });
};