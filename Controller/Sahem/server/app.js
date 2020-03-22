// const express = require('express');
// const path = require('path');
// const cookieParser = require('cookie-parser');
// const logger = require('morgan');

import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import logger from 'morgan';
// const indexRouter = require('./app_server/routes/index');
// const apiRouter = require('./app_api/routes/index');
// const usersRouter = require('./app_server/routes/users');
// const projectsRouter = require('./app_server/routes/projects');
import indexRouter from './app_server/routes/index';
import apiRouter from './app_api/routes/index';
// import usersRouter from './app_server/routes/users';
// import projectsRouter from './app_server/routes/projects';

require('./app_api/models/db');
//connect to db

//init app
const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

//define routes
app.use('/', indexRouter);
app.use('/api', apiRouter);
// app.use('/users', usersRouter);
// app.use('/projects', projectsRouter);
// app.use('/register', registerRouter);
export default app;
