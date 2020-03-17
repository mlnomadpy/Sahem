"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.projectsDeleteOne = exports.projectsUpdateOne = exports.projectsReadOne = exports.projectsCreate = exports.projectsList = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _project = require("../models/Content/project");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const Project = require('../models/Content/project').Project;
var projectsList = function projectsList(req, res) {
  _project.Project.find({}, '', function (error, projects) {
    if (error) {
      console.error(error);
    }

    if (projects) {
      res.status(200).send({
        projects: projects
      });
    } else {
      res.status(404).send("not Found");
    }
  });
};

exports.projectsList = projectsList;

var projectsCreate = function projectsCreate(req, res) {
  _project.Project.create({
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

exports.projectsCreate = projectsCreate;

var projectsReadOne = function projectsReadOne(req, res) {
  _project.Project.findById(req.params.projectid).exec(function (err, project) {
    if (!project) {
      return res.status(404).json({
        "message": "project not found"
      });
    } else if (err) {
      return res.status(404).json(err);
    }

    res.status(200).json(project);
  });
};

exports.projectsReadOne = projectsReadOne;

var projectsUpdateOne = function projectsUpdateOne(req, res) {
  _project.Project.findById(req.body.projectid).execc(function (err, project) {
    project.description = req.body.description;
    project.save(function (err, proj) {
      if (err) {
        res.status(404).json(err);
      } else {
        res.status(200).json(proj);
      }
    });
  });
};

exports.projectsUpdateOne = projectsUpdateOne;

var projectsDeleteOne = function projectsDeleteOne(req, res) {
  var projectid = req.params.projectid;

  if (projectid) {
    _project.Project.findByIdAndRemove(project).exec(function (err, project) {
      if (err) {
        return res.status(404).json(err);
      }

      res.status(204).json(null);
    });
  } else {
    res.status(404).json({
      message: "This Project doesn't Exist"
    });
  } // Loc
  //     .findById(locationid)
  //     .exec((err, location) => {
  //         // Do something with the document
  //         location.remove((err, loc) => {
  //             // Confirm success or failure
  //         });
  //     }
  //     );

}; // module.exports = {
//     projectsList,
//     projectsCreate,
//     projectsReadOne,
//     projectsUpdateOne,
//     projectsDeleteOne
// };


exports.projectsDeleteOne = projectsDeleteOne;