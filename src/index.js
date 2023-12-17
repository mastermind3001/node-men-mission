const cluster = require('cluster');
const os = require('os');
const sequelize = require("./sequelize");
const port = 4000;

const app = require('../src/app/app');

async function assertDatabaseConnectionOk() {
  console.log(`Checking database connection...`);
  try {
    await sequelize.authenticate();
    console.log('Database connection OK!');
  } catch (error) {
    console.log('Unable to connect to the database:');
    console.log(error.message);
    process.exit(1);
  }
}

async function init() {
  await assertDatabaseConnectionOk();

  console.log(`Starting Sequelize + Express example on port ${port}...`);

  app.listen(port, () => {
    console.log(`Listening on ${port}`);
  });
}

// check if the process is the master process
if (cluster.isMaster) {
  // get the number of available CPU cores
  const CPUs = os.cpus().length;
  // fork worker processes for each available CPU cores
  for (let i = 0; i < CPUs; i++) {
    cluster.fork()
  }

} else {
  const sequelize = require('./sequelize');

  sequelize.sync();
  init();
}