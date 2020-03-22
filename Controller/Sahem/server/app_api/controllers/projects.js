import mongoose from 'mongoose';
import { Project } from "../models/Content/project";
// const Project = require('../models/Content/project').Project;
export const projectsList = (req, res) => {
    Project
        .find({}, '', (error, projects) => {
            if (error) { console.error(error); }
            if (projects) {
                res
                    .status(200)
                    .send({
                        projects: projects
                    });
            }
            else {
                res
                    .status(404)
                    .send("not Found");
            }
        });


};
export const projectsCreate = (req, res) => {
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
                    .json(project);
            }
        });
};
export const projectsReadOne = (req, res) => {
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
            res
                .status(200)
                .json(project);
        });


};
export const projectsUpdateOne = (req, res) => {
    Project
        .findById(req.body.projectid)
        .execc((err, project) => {
            project.description = req.body.description;
            project.save((err, proj) => {
                if (err) {
                    res
                        .status(404)
                        .json(err);
                }
                else {
                    res
                        .status(200)
                        .json(proj);
                }
            })
        })
};
export const projectsDeleteOne = (req, res) => {
    const { projectid } = req.params;
    if (projectid) {
        Project
            .findByIdAndRemove(project)
            .exec((err, project) => {
                if (err) {
                    return res
                        .status(404)
                        .json(err);
                }
                res
                    .status(204)
                    .json(null);
            });
    }
    else {
        res
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



// module.exports = {
//     projectsList,
//     projectsCreate,
//     projectsReadOne,
//     projectsUpdateOne,
//     projectsDeleteOne
// };