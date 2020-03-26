// const mongoose = require('mongoose');
import mongoose from "mongoose";
// const Fundraiser = require('../models/User/fundraiser').Fundraiser;
import { Creator } from "../models/User/Creator";
 const creatorsList = (req, res) => {
    Creator
        .find({}, '', (error, creators) => {
            if (error) { console.error(error); }
            if (Creators) {
                res
                    .status(200)
                    .send({
                        creators: creators
                    });
            }
            else {
                res
                    .status(404)
                    .send("not Found");
            }
        });


};
 const creatorsCreate = (req, res) => {
    Project
        .create({
            personal_information: req.body.personal_information,
            address: req.body.address,
            user_id: req.body.user_id,
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
 const creatorsReadOne = (req, res) => {
    console.log("res");
    res
        .status(200)
        .json({
            name: "success"
        });
};
 const creatorsUpdateOne = (req, res) => {

};
 const creatorsDeleteOne = (req, res) => {

};

module.exports = {
    creatorsList,
    creatorsCreate,
    creatorsReadOne,
    creatorsUpdateOne,
    creatorsDeleteOne
};