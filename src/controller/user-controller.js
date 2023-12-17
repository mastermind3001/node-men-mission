const {models} = require('../sequelize/');

async function update(req, res) {
  let amount = parseInt(req.body.amount);
  let userId = req.body.userId;

  const user = await models.User.findOne({where: {id: userId}}) ?? null;
  if (amount < 0 && user?.balance < Math.abs(amount)) {
    res.status(400).send({
      'message': 'Balance should be bigger then zero.'
    });
  } else {
    user.balance = user.balance + amount;
    await user.save();
    res.status(200).json(user).end();
  }
}


module.exports = {
  update
}