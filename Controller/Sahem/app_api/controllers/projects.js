const mongoose = require('mongoose');
const Project = require('../models/Content/project').ProjectModel;
const projectsList = (req, res) => {
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
const projectsCreate = (req, res) => {

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
            res
                .status(200)
                .json(project);
        });


};
const projectsUpdateOne = (req, res) => { };
const projectsDeleteOne = (req, res) => { };

module.exports = {
    projectsList,
    projectsCreate,
    projectsReadOne,
    projectsUpdateOne,
    projectsDeleteOne
};