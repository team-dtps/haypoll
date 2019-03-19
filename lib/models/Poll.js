const mongoose = require('mongoose');

const pollSchema = new mongoose.Schema({
  prompt: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 254
  },
  choices: {
    type: Array
  },
  creator: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Poll', pollSchema);
