const mongoose = require('mongoose');
const _ = require('lodash');
const {Schema} = mongoose;

// Store data for push notifications

const modelSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String
  },
  params: [{
      paramName: String,
      valueType: String
  }]
});

modelSchema.methods.getJSON = function() {
  var model = this;
  var modelObject = provider.toObject();
  return _.pick(modelObject, ['title', 'description', 'params']);
}

/**
In case we need custom saving procedure:
modelSchema.pre('save', function (next) {

});
**/

mongoose.model('models', modelSchema);
