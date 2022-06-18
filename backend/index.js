require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const usersRouter = require('./routes/users');
const coursesRouter = require('./routes/courses');
const classesRouter = require('./routes/classes');
const studentsRouter = require('./routes/students');

const app = express();

app.use(morgan('dev'));

mongoose.connect("mongodb+srv://unidesc:unidesc@unidesc.zrjpt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
  useNewUrlParser: true,
});

app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/users', usersRouter);
app.use('/courses', coursesRouter);
app.use('/classes', classesRouter);
app.use('/students', studentsRouter);

module.exports = app;