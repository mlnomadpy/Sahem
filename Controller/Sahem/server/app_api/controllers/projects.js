import mongoose from 'mongoose';
import { Project } from "../models/Content/project";
import { Creator } from '../models/User/Creator';
// const Project = require('../models/Content/project').Project;
const projectsList = (req, res) => {
    Project
        .find({}, '', (error, projects) => {
            if (error) { console.error(error); }
            if (projects) {
                return res
                    .status(200)
                    .send({
                        projects
                    });
            }
            else {
                return res
                    .status(404)
                    .send("Not Found");
            }
        });


};

const projectsCreate = (req, res) => {
    // const header_image = '';
    // if (req.files['header_image'][0]) {
    //     header_image = req.files['header_image'][0];
    // }
    // const thumbnail = '';
    // if (req.files['thumbnail'][0]) {
    //     thumbnail = req.files['thumbnail'][0];
    // }
    console.log(req.files);
    Project
        .create({
            owner: req.creator._id,
            title: req.body.title,
            category: req.body.category,
            content: req.body.content,
            description: req.body.description,
            fundGoal: req.body.fundGoal,
            endDate: req.body.endDate,
            // header_image: req.file,
            header_image: req.files['header_image'][0],
            thumbnail: req.files['thumbnail'][0]
        }, (err, project) => {
            if (err) {
                return res
                    .status(404)
                    .json(err);
            }
            else {
                // const creator = Creator.findOne({ _id: req.creator._id });
                Creator.addProject(req.creator._id, project._id);
                return res
                    .status(201)
                    .json(project);
            }
        });
};
const projectsReadOne = (req, res) => {
    Project
        .findById(req.params.projectid)
        .exec((err, project) => {
            if (!project) {
                return res
                    .status(404)
                    .json({
                        "message": "project not found"
                    });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            }
            return res
                .status(200)
                .json(project);
        });


};
const projectsUpdateOne = (req, res) => {

    Project
        .findById(req.body.projectid)
        .exec((err, project) => {

            if (err) {
                return res
                    .status(404)
                    .json(err);
            }

            if (project.owner != req.creator._id) {
                return res
                    .status(401)
                    .json({
                        'message': 'you are not the owner'
                    });
            }

            if (req.body.description) {
                project.description = req.body.description;
            }

            if (req.body.category) {
                project.category = req.body.category;
            }

            if (req.body.content) {
                project.content = req.body.content;
            }

            if (req.body.category) {
                project.description = req.body.category;
            }

            if (req.body.fundGoal) {
                project.fundGoal = req.body.fundGoal;
            }

            if (req.body.category) {
                project.description = req.body.category;
            }

            const header_image = '';
            if (req.files['header_image'][0]) {
                project.header_image = req.files['header_image'][0];
            }

            const thumbnail = '';
            if (req.files['thumbnail'][0]) {
                project.thumbnail = req.files['thumbnail'][0];
            }

            project.save((err, proj) => {
                if (err) {
                    return res
                        .status(404)
                        .json(err);
                }
                else {
                    return res
                        .status(200)
                        .json(proj);
                }
            })
        })
};
const projectsDeleteOne = (req, res) => {
    const { projectid } = req.params;
    //TODO delete project id from the creator's projects
    if (projectid) {
        Project
            .findByIdAndRemove({ _id: projectid })
            .exec((err, project) => {
                if (err) {
                    return res
                        .status(404)
                        .json(err);
                }
                // check if the project owner match the creator of the current user
                if (project.owner != req.creator._id) {
                    return res
                        .status(401)
                        .json({
                            'message': 'you are not the owner of this project'
                        });
                }
                // deleting project from creator projects
                Creator.deleteProject(project.owner, project._id);

                return res
                    .status(204)
                    .json(null);
            });
    }
    else {
        return res
            .status(404)
            .json({
                message: "This Project doesn't Exist"
            })
    }

    // Loc
    //     .findById(locationid)
    //     .exec((err, location) => {
    //         // Do something with the document
    //         location.remove((err, loc) => {
    //             // Confirm success or failure
    //         });
    //     }
    //     );
};



module.exports = {
    projectsList,
    projectsCreate,
    projectsReadOne,
    projectsUpdateOne,
    projectsDeleteOne
};