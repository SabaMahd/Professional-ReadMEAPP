const { Schema, model } = require('mongoose');
const validateEmail = require('../utils/validateEmail');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validateEmail, 'Please enter a valid email'],
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    files: [{ type: Schema.Types.ObjectId, ref: 'ReadMe' }],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.virtual('fileCount').get(function () {
  return this.files.length;
});

const User = model('User', userSchema);

module.exports = User;
