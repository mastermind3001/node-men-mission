//validation
const {userValidationRules, validate} = require('../validators/validator');
const {existParams} = require('../middleware/exist-params');

const userController = require('../controller/user-controller');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.post('/balance/change', existParams, userValidationRules(), validate,
  (req, res) => {
    userController.update(req, res);
  });
module.exports = app;