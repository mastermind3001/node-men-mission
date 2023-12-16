const db = require('../config/config.db');


db.users = require('./users.model');
(db.sequelize, db.Sequalize);

db.users.findOrCreate({
  where: {id: 'test'},
  defaults: {
    balance: 10000
  }
}).then((res) => {
  console.log("created");
}).catch((e) => {
  console.log(`error: ${e.message}`);
});

module.exports = db;