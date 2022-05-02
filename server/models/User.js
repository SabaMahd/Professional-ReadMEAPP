const { Schema, model } = require('mongoose');
const validateEmail = require('../utils/validateEmail')
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validateEmail, 'Please enter a valid email']
  }
});
