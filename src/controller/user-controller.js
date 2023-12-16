const db = require('../database/db.config');

const {randomBytes} = require('crypto');
const {where} = require("sequelize");
const e = require("express");

const User = db.users;

async function updateUser(req, res) {

  let amountInt = parseInt(req.body.amount);
  let userId = req.body.userId;

  try {
    const user = await findUser(userId);
    if (amountInt < 0 && user.balance < Math.abs(amountInt)) {
      res.status(400).send({
        'message': 'Balance should be positive, only bigger then zero.'
      });
    }

    const updated = {
      amount: user.balance + amountInt
    }

    const userUpdate = await User.update(updated, {
        where: {id: userId}
      }
    );

    res.status(200).send({userUpdate});
  } catch (e) {
    res.status(500).send(e.message)
  }

}

async function findUser(userId) {
  return await User().findOne({where: {id: userId}});
}


module.exports = {
  updateUser: updateUser
}