const mongoose = require('mongoose');

const classeSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  classe: {
    type: String,
    required: true,
    unique: true,
  },
  courseId: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model('Classes', classeSchema);