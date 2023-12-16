const Sequelize = require('sequelize');

const dbName = 'test';
const dbUser = 'test';
const dbPassword = 'test';

const sequelize = new Sequelize(dbName, dbUser,
  dbPassword, {
    host: 'localhost',
    port: '5432',
    dialect: 'postgres'
  });

const db = {
  Sequelize,
  sequelize,
};

db.users = require('../model/customer.model')
(sequelize, Sequelize);


// migration
// db.config.js

const {Umzug, SequelizeStorage} = require('umzug');

import db from './db.config';

const umzug = new Umzug({
  migrations: {glob: '../migrations/*.js'},
  context: db.sequelize.getQueryInterface(),
  storage: new SequelizeStorage({sequelize: db.sequelize}),
  logger: console,
});

(async () => {
  // Checks migrations and run them if they are not already applied. To keep
  // track of the executed migrations, a table (and sequelize model) called SequelizeMeta
  // will be automatically created (if it doesn't exist already) and parsed.
  await umzug.up().then(() => console.log('is '));

})();

module.exports = db;