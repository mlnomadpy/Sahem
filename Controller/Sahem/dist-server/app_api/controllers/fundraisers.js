"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.creatorsDeleteOne = exports.creatorsUpdateOne = exports.creatorsReadOne = exports.creatorsCreate = exports.creatorsList = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _Creator = require("../models/User/Creator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const mongoose = require('mongoose');
// const Fundraiser = require('../models/User/fundraiser').Fundraiser;
var creatorsList = function creatorsList(req, res) {
  _Creator.Creator.find({}, '', function (error, creators) {
    if (error) {
      console.error(error);
    }

    if (Creators) {
      res.status(200).send({
        creators: creators
      });
    } else {
      res.status(404).send("not Found");
    }
  });
};

exports.creatorsList = creatorsList;

var creatorsCreate = function creatorsCreate(req, res) {
  Project.create({
    personal_information: req.body.personal_information,
    address: req.body.address,
    user_id: req.body.user_id
  }, function (err, project) {
    if (err) {
      res.status(404).json(err);
    } else {
      res.status(201).json(location);
    }
  });
};

exports.creatorsCreate = creatorsCreate;

var creatorsReadOne = function creatorsReadOne(req, res) {
  console.log("res");
  res.status(200).json({
    name: "success"
  });
};

exports.creatorsReadOne = creatorsReadOne;

var creatorsUpdateOne = function creatorsUpdateOne(req, res) {};

exports.creatorsUpdateOne = creatorsUpdateOne;

var creatorsDeleteOne = function creatorsDeleteOne(req, res) {}; // module.exports = {
//     fundraisersList,
//     fundraisersCreate,
//     fundraisersReadOne,
//     fundraisersUpdateOne,
//     fundraisersDeleteOne
// };


exports.creatorsDeleteOne = creatorsDeleteOne;