const userController = require('../controller/user-controller');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.post('/balance/change', (req, res) => {
  if (!req.body.amount || !req.body.userId) {
    res.status(400).send({
      message: 'field missed'
    });
  }

  userController.update(req, res);
});

// app.get('/get', (req, res) => {
//   res.status(200).send('is').end();
//
// });

module.exports = app;