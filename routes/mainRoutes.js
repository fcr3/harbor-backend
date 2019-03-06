const mongoose = require('mongoose');

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send({message: "Welcome to the Harbor API"});
  });
}
