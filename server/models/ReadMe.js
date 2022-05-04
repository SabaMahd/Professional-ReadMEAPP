const { Schema, model } = require('mongoose');
const formatDate = require('../utils/formatDate');

const readmeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      maxlength: 280,
    },

    technologies: [{ type: String }],

    installation: {
      type: String,
      maxlength: 280,
    },

    usage: {
      type: String,
      maxlength: 280,
    },

    createdAt: {
      type: Date,
      default: Date.now,
      get: formatDate,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const ReadMe = model('ReadMe', readmeSchema);

module.exports = ReadMe;
