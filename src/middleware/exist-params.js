const existParams = (req, res, next) => {
  if (!req.body.amount || !req.body.userId) {
    res.status(400).send({
      message: 'field missed - add userId or amount'
    });
  } else {
    return next();
  }

}

module.exports = {
  existParams
};