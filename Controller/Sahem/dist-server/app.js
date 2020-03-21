"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _index = _interopRequireDefault(require("./app_server/routes/index"));

var _index2 = _interopRequireDefault(require("./app_api/routes/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const express = require('express');
// const path = require('path');
// const cookieParser = require('cookie-parser');
// const logger = require('morgan');
// const indexRouter = require('./app_server/routes/index');
// const apiRouter = require('./app_api/routes/index');
// const usersRouter = require('./app_server/routes/users');
// const projectsRouter = require('./app_server/routes/projects');
// import usersRouter from './app_server/routes/users';
// import projectsRouter from './app_server/routes/projects';
require('./app_api/models/db'); //connect to db
//init app


var app = (0, _express["default"])();
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _cookieParser["default"])());
app.use(_express["default"]["static"](_path["default"].join(__dirname, '../public'))); //define routes

app.use('/', _index["default"]);
app.use('/api', _index2["default"]); // app.use('/users', usersRouter);
// app.use('/projects', projectsRouter);
// app.use('/register', registerRouter);

var _default = app;
exports["default"] = _default;