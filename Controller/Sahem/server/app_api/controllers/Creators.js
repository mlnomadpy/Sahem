// const mongoose = require('mongoose');
import mongoose from "mongoose";
// const Fundraiser = require('../models/User/fundraiser').Fundraiser;
import { Creator } from "../models/User/Creator";
import { PersonalInformation } from "../models/User/PersonalInformation";

const creatorsList = (req, res) => {
    Creator
        .find({}, '', (error, creators) => {
            if (error) { console.error(error); }
            if (Creators) {
                return res
                    .status(200)
                    .send({
                        creators: creators
                    });
            }
            else {
                return res
                    .status(404)
                    .send("not Found");
            }
        });


};
const creatorsCreate = (req, res) => {
    //avatar
    const avatar = '';
    // if (req.file) avatar = req.file;
    console.log(req.file);
    Creator
        .create({
            user_id: req.user._id,
            creator_tag: req.body.creator_tag,
            bio: req.body.bio,
            avatar: req.file
        }, (err, creator) => {
            if (err) {
                res
                    .status(404)
                    .json(err);
            }
            else {
                const personal_information = new PersonalInformation();

                personal_information.first_name = req.body.first_name;
                personal_information.last_name = req.body.last_name;
                personal_information.address = req.body.address;
                personal_information.birthday = req.body.birthday;
                if (!personal_information.first_name || !personal_information.last_name || !personal_information.address || !personal_information.birthday) {
                    return res
                        .status(404)
                        .json({ 'message': 'all fields are required' });
                }

                personal_information.save((err, p_i) => {
                    if (err) {
                        return res
                            .status(201)
                            .json({ err, creator, 'message': 'personal information has not been set' });
                    }
                    else {
                        creator.personal_information = p_i._id;
                        return res
                            .status(201)
                            .json("creator created");
                    }
                });

            }
        });
};
const creatorsUpdateOne = (req, res) => {
 
    Creator
        .findById(req.creator._id)
        .execc((err, creator) => {
            if (err) {
                return res
                    .status(404)
                    .json(err);
            }
            if (creator.user_id != req.user._id) {
                return res
                    .status(401)
                    .json({
                        'message': 'you are not the owner'
                    });
            }
            if (!req.body.creator_tag && !req.body.bio) {
                return res
                    .status(400)
                    .json({
                        'message': 'you are required to  enter at least on field to edit'
                    });
            }
            if (req.body.creator_tag) {
                creator.creator_tag = req.body.creator_tag;
            }

            if (req.body.bio) {
                creator.bio = req.body.bio;
            }

            if (req.files) {
                creator.avatar = req.file;
            }

            creator.save((err, creator) => {
                if (err) {
                    return res
                        .status(404)
                        .json(err);
                }
                else {
                    return res
                        .status(200)
                        .json(creator);
                }
            })
        })
};
const creatorsDeleteOne = (req, res) => {
    const { creatorid } = req.params;
    if (creatorid) {
        Creator
            .findByIdAndRemove(creatorid)
            .exec((err, creator) => {
                if (err) {
                    return res
                        .status(404)
                        .json(err);
                }
                // check if the creator owner match the creator of the current user
                if (creator.user_id != req.user._id) {
                    return res
                        .status(401)
                        .json({
                            'message': 'you are not the owner of this creator'
                        });
                }
                return res
                    .status(204)
                    .json(null);
            });
    }
    else {
        return res
            .status(404)
            .json({
                message: "This creator doesn't Exist"
            })
    }

};

// const creatorsReadOne = (req, res) => {
//     const { creatorid } = req.params;

//     const creator = Creator.getCreatorById(creatorid);
//     console.log(creator);
//     res.json({
//         creator
//     });
// };

const creatorsReadOne = (req, res) => {
    Creator
        .findById(req.params.creatorid)
        .exec((err, creator) => {
            if (!creator) {
                return res
                    .status(404)
                    .json({
                        "message": "creator not found"
                    });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            }
            return res
                .status(200)
                .json(creator);
        });


};


const creatorsProfileRead = (req, res) => {
    const { userid } = req.user._id;

    const creator = Creator.getCreatorByUserId(userid);
    res.json({
        creator
    });
};

module.exports = {
    creatorsList,
    creatorsCreate,
    creatorsReadOne,
    creatorsUpdateOne,
    creatorsDeleteOne,
    creatorsProfileRead
};