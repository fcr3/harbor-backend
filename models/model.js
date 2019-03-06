const mongoose = require('mongoose');
const _ = require('lodash');
const {Schema} = mongoose;

// Store data for push notifications

const modelSchema = new Schema({
  _id: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  params: {
    type: [{
      type: String
    }],
    required: true
  }
});

modelSchema.methods.getJSON = function() {
  var model = this;
  var modelObject = provider.toObject();
  return _.pick(modelObject, ['title', 'description', 'params']);
}

deviceSchema.pre('save', function (next) {
  var user = this;
  user. = new Date();
  next();
});

mongoose.model('models', modelSchema);
