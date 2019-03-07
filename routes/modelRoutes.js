const _ = require('lodash');
const mongoose = require('mongoose');
// const {appUserAuth} = require('../middleWares/appUserAuth');
const Models = mongoose.model('models');


module.exports = (app) => {

  app.post('/api/newModel', (req, res) => {
    var body = _.pick(req.body, ['title', 'description', 'params']);
    var newModel = new Models(body);

    console.log(body);

    newModel.save().then(() => {
      res.send({success: true, params: body});
    }).catch((e) => {
      res.status(401).send({success: false, error: 401, params: body});
    });
  });

  app.get('/api/getModels', (req, res) => {
    Models.find({}, null, {limit: 8}, (err, models) => {
      var requestModels = models.map((val) => {
        const newParams = val.params.map((paramObj) => {
          const retParams = {
            paramName: paramObj.paramName,
            valueType: paramObj.valueType
          };
          return retParams;
        });

        return {
          title: val.title,
          description: val.description,
          params: newParams
        }
      });

      if (err) {res.status(401).send();}
      else {res.send({message: 'Sample Data', models: requestModels});}
    });
  });

  app.get('/api/getModel/id=:id&model_name=:name', (req, res) => {
    var paramsObj = _.pickBy(req.params, (val) => val !== '\'\'' || !val);
    var mongoParamsObj = _.mapValues(paramsObj, (val, key) => {
      return {$in: val}
    });

    Models.find(mongoParamsObj).then((models) => {
      res.send({
        success: true,
        count: models.length,
        params: paramsObj,
        models
      });
    }).catch((e) => res.status(404).send());
  });

  /** To Be Implemented
  app.patch('/appUser/addInsurance', appUserAuth, (req, res) => {

  });

  app.delete('/appUser/deleteInsurance', appUserAuth, (req, res) => {

  });
  **/

};
