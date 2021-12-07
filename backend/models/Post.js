const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    dateNaissance: {
      type: String,
      required: true
    },
    mission: {
      type: String,
      required: true
    },
    dateMission: {
      type: String,
      required: true
    },
    nationalite: {
      type: String,
      required: true
    },
    employeur: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  });

module.exports = mongoose.model('Posts', schema);
