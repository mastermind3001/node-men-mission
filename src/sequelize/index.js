const {Sequelize} = require("sequelize");

const {development} = require('../config/config');

const sequelize = new Sequelize(
  development.database, development.username, development.password, {
    host: development.host,
    port: development.port,
    dialect: development.dialect
  }
);
const modelDefinders = [
  require('./models/users.model')
];

for (const modelDefinder of modelDefinders) {
  modelDefinder(sequelize);
}
// create user
sequelize.models.User.findOrCreate({
  where: {id: 'test'},
  defaults: {
    balance: 10000
  }
}).then((res) => {
  console.log("created");
}).catch((e) => {
  console.log(`error: ${e.message}`);
})

module.exports = sequelize;
