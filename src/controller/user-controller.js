const User = require('../models/users.model');

async function updateUser(req, res) {
  let amountInt = parseInt(req.body.amount);
  let userId = req.body.userId;
  try {
    const user = await findUser(userId);
    if (amountInt < 0 && user.balance < Math.abs(amountInt)) {
      res.status(400).send({
        'message': 'Balance should be positive, only bigger then zero.'
      });
    } else {
      user.balance = user.balance + amountInt;
      user.save();
      res.status(200).send(user);
    }
  } catch (e) {
    res.status(500).send(e.message)
  }

}

async function findUser(userId) {
  return await User.findOne({where: {id: userId}});
}


module.exports = {
  updateUser: updateUser
}