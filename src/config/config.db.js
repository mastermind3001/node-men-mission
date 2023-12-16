const Sequelize = require("sequelize");
const {development} = require('./config');

const sequelize = new Sequelize(
  development.database, development.username, development.password, {
    host: development.host,
    port: development.port,
    dialect: development.dialect
  }
);

const db = {};

db.Sequalize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
