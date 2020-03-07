const mongoose = require('mongoose');
const Fundraiser = require('../models/User/fundraiser').FundraiserModel;
const fundraisersList = (req, res) => {
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
const fundraisersCreate = (req, res) => {
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
const fundraisersReadOne = (req, res) => {
    console.log("res");
    res
        .status(200)
        .json({
            name: "success"
        });
};
const fundraisersUpdateOne = (req, res) => {

};
const fundraisersDeleteOne = (req, res) => {

};

module.exports = {
    fundraisersList,
    fundraisersCreate,
    fundraisersReadOne,
    fundraisersUpdateOne,
    fundraisersDeleteOne
};