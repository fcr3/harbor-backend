const express = require('express');
const mongoose = require('mongoose');
// const cookieSession = require('cookie-session');
const passport = require('passport');
// const bodyParser = require('body-parser');
const keys = require('./config/keys');

require('./models/providerMapData');
require('./models/users');
require('./models/devices');
// require('./services/passport');

mongoose.connect(keys.MONGODB_URI, {useNewUrlParser: true});
const app = express();
app.use(bodyParser.json());

// For Authentication use, if online application is needed:
// app.use(
//   cookieSession({
//     maxAge: 30 * 24 * 60 * 60 * 1000,
//     keys: [keys.cookieKey]
//   })
// );
// app.use(passport.initialize());
// app.use(passport.session());

require('./routes/mainRoutes')(app);
// require('./routes/appDeviceRoutes')(app);
// require('./routes/appUserRoutes')(app);
// require('./routes/webAuthUserRoutes')(app);


app.listen(keys.PORT, () => {
  if (process.env.NODE_ENV !== 'production') {
      console.log(`listening on port ${keys.PORT}`);
  }
})
