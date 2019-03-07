# Harbor Backend

## Description:
- A naive harbor backend for basic GET and POST requests to get model data
- Transitioning to Starlette.io soon

## Schema:
Model Schema is as follows:
```
Model
└─── __id
└─── title
└─── description
└─── params (array)
    └─── key & value object
```

## Routes:
### GET:
- /api/getModels
- /api/getModel/id=:id&model_name=:name
  - Provide ```id``` and ```name``` in params for url

### POST:
- /api/newModel
  - Provide ```title```, ```description```, and ```params``` in request body

## Technology:
- MongoDB (mLab or your own setup if you want to host local database)
- Express
- Mongoose
- Nodemon (optional - purely for testing)
- Postman (optional - purely for testing)
