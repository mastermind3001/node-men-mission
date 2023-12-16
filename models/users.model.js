const { Sequelize, DataTypes } = require('sequelize');

const db = require("../config/config.db");

const User = db.sequelize.define('User', {
  // Model attributes are defined here
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  balance: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  // Other model options go here
});

module.exports = User;