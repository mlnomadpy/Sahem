// const mongoose = require('mongoose');
import mongoose from "mongoose";
// const Fundraiser = require('../models/User/fundraiser').Fundraiser;
import { Fundraiser } from "../models/User/Fundraiser";
export const fundraisersList = (req, res) => {
    Fundraiser
        .find({}, '', (error, Fundraisers) => {
            if (error) { console.error(error); }
            if (Fundraisers) {
                res
                    .status(200)
                    .send({
                        fundraisers: fundraisers
                    });
            }
            else {
                res
                    .status(404)
                    .send("not Found");
            }
        });


};
export const fundraisersCreate = (req, res) => {
    Project
        .create({
            content: req.body.content,
            description: req.body.description,
            fundGoal: req.body.fundGoal,
            endDate: req.body.endDate
        }, (err, project) => {
            if (err) {
                res
                    .status(404)
                    .json(err);
            }
            else {
                res
                    .status(201)
                    .json(location);
            }
        });
};
export const fundraisersReadOne = (req, res) => {
    console.log("res");
    res
        .status(200)
        .json({
            name: "success"
        });
};
export const fundraisersUpdateOne = (req, res) => {

};
export const fundraisersDeleteOne = (req, res) => {

};

// module.exports = {
//     fundraisersList,
//     fundraisersCreate,
//     fundraisersReadOne,
//     fundraisersUpdateOne,
//     fundraisersDeleteOne
// };