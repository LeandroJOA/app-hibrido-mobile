require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const usersRouter = require('./routes/users');
<<<<<<< HEAD
const coursesRouter = require('./routes/courses');
const classesRouter = require('./routes/classes');
=======
const studentsRouter = require('./routes/students');
>>>>>>> 0c53846c1bf0366271ff688d952d0e39bc26e6a4

const app = express();

app.use(morgan('dev'));

mongoose.connect(process.env.DB_DRIVER, {
  useNewUrlParser: true,
});

app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/users', usersRouter);
<<<<<<< HEAD
app.use('/courses', coursesRouter);
app.use('/classes', classesRouter);
=======
app.use('/students', studentsRouter);
>>>>>>> 0c53846c1bf0366271ff688d952d0e39bc26e6a4

module.exports = app;