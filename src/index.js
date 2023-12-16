const cluster = require('cluster');
const os = require('os');
const controller = require('./controller/user-controller');
// check if the process is the master process
// if (cluster.isMaster) {
//     // get the number of available CPU cores
//     const CPUs = os.cpus().length;
//     // fork worker processes for each available CPU cores
//     for (let i = 0; i < CPUs; i++) {
//         cluster.fork()
//     }
//
// } else {


const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const db = require('./database/db.config');

// migra
db.sequelize.sync();



app.post('/balance/change', (req, res) => {

  if (!req.body.amount || !req.body.userId) {
    return res.status(400).send({
      message: 'field missed'
    });
  }

  controller.updateUser(req, res).then((data) => {console.log(data)});
});


const port = 4000;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});