const { Schema, model, Types } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
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
      match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
      type: String,
      required: true,
      minlength: 5
    },
    readMe: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Readme'
      }
    ] 
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }

);

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return bcrypt.compare(password, this.password);
};

// get total count of readme documents
PizzaSchema.virtual('readmeCount').get(function() {
  return this.readMe.length;
});

const User = model('User', userSchema);

module.exports = User;