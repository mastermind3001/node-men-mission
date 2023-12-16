// migrations/00_initial.js

const {Sequelize} = require('sequelize');

async function up({context: queryInterface}) {
    // await queryInterface.createTable('users', {
    //     id: {
    //         type: Sequelize.STRING,
    //         primaryKey: true
    //     },
    //     amount: {
    //         type: Sequelize.INTEGER
    //     }
    // });

    await queryInterface.bulkInsert('users',[{
        'id': 'test',
        'balance': 10000
    }])
}

async function down({context: queryInterface}) {
    await queryInterface.dropTable('users');
}

module.exports = {up, down};