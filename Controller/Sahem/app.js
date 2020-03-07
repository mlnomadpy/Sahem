const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./app_server/routes/index');
const apiRouter = require('./app_api/routes/index');
const usersRouter = require('./app_server/routes/users');
const projectsRouter = require('./app_server/routes/projects');
require('./app_api/models/db');
//connect to db

//init app

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//define routes
app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/users', usersRouter);
app.use('/projects', projectsRouter);


module.exports = app;
