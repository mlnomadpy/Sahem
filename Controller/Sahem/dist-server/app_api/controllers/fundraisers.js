"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fundraisersDeleteOne = exports.fundraisersUpdateOne = exports.fundraisersReadOne = exports.fundraisersCreate = exports.fundraisersList = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _Fundraiser = require("../models/User/Fundraiser");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const mongoose = require('mongoose');
// const Fundraiser = require('../models/User/fundraiser').Fundraiser;
var fundraisersList = function fundraisersList(req, res) {
  _Fundraiser.Fundraiser.find({}, '', function (error, Fundraisers) {
    if (error) {
      console.error(error);
    }

    if (Fundraisers) {
      res.status(200).send({
        fundraisers: fundraisers
      });
    } else {
      res.status(404).send("not Found");
    }
  });
};

exports.fundraisersList = fundraisersList;

var fundraisersCreate = function fundraisersCreate(req, res) {
  Project.create({
    content: req.body.content,
    description: req.body.description,
    fundGoal: req.body.fundGoal,
    endDate: req.body.endDate
  }, function (err, project) {
    if (err) {
      res.status(404).json(err);
    } else {
      res.status(201).json(location);
    }
  });
};

exports.fundraisersCreate = fundraisersCreate;

var fundraisersReadOne = function fundraisersReadOne(req, res) {
  console.log("res");
  res.status(200).json({
    name: "success"
  });
};

exports.fundraisersReadOne = fundraisersReadOne;

var fundraisersUpdateOne = function fundraisersUpdateOne(req, res) {};

exports.fundraisersUpdateOne = fundraisersUpdateOne;

var fundraisersDeleteOne = function fundraisersDeleteOne(req, res) {}; // module.exports = {
//     fundraisersList,
//     fundraisersCreate,
//     fundraisersReadOne,
//     fundraisersUpdateOne,
//     fundraisersDeleteOne
// };


exports.fundraisersDeleteOne = fundraisersDeleteOne;