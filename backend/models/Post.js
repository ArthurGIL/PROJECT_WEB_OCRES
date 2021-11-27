const mongoose = require('mongoose');

const schema = mongoose.Schema({
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    age: {
      type: String,
      required: true
    }
  });

module.exports = mongoose.model('Posts', schema);
