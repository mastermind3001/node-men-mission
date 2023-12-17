const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('User', {
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
};