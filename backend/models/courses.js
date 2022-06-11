const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  course: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model('Course', courseSchema);
