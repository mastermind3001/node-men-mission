module.exports  = (sequelize, Sequelize) => {
    const users = sequelize.define('RioORM', {
        id: {
          type:Sequelize.STRING,
            primaryKey: true
        },
        amount: {
            type: Sequelize.INTEGER
        }
    });
    users.
    return users;
}