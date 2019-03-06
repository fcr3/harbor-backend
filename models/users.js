const mongoose = require('mongoose');
const validator = require('validator');
// const bcrypt = require('bcryptjs');
const {Schema} = mongoose;

const userSchema = new Schema({
  _id: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email'
    }
  }
});

mongoose.model('users', userSchema);
