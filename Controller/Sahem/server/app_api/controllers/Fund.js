import mongoose from "mongoose";
import { Fund } from "../models/fund/fund";
import { Project } from "../models/Content/project";
import stripe from 'stripe';
stripe(process.env.STRIPE_SECRET_KEY);
// const Project = mongoose.model("Project");
const fundsCreate = (req, res) => {
    //avatar
    // if (req.file) avatar = req.file;
    // TODO check req.params.projectid if it's a real project and the project exist
    // Project
    //     .findById(req.body.projectid)
    //     .exec((err, project) => {

    //         if (err) {
    //             return res
    //                 .status(404)
    //                 .json(err);
    //         }
    //     });
    console.log('you are here now');
    // TODO charge if successful create Fund
    Fund
        .create({
            funder: req.creator._id,
            project: req.params.projectid,
            amount: req.body.amount,
            customer: req.customer
        }, (err, fund) => {
            if (err) {
                res
                    .status(404)
                    .json(err);
            }
            else {
                // TODO add fund to the project
                Project
                    .findById(req.body.projectid)
                    .exec((err, project) => {

                        if (err) {
                            return res
                                .status(404)
                                .json(err);
                        }
                        console.log({ proj });
                        project.funders.push(fund);

                        project.save((err, proj) => {
                            if (err) {
                                return res
                                    .status(404)
                                    .json(err);
                            }
                            else {
                                // console.log({ fund, proj });
                                return res
                                    .status(200)
                                    .json({ fund, proj });
                            }
                        })
                    });
            }
        });
};

module.exports = {
    fundsCreate
};