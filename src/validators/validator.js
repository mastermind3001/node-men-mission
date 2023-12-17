const {body, validationResult} = require('express-validator');

const userValidationRules = () => {
  return [
    // id must be a string
    body('userId').isString().withMessage("userId should be a string like uuidv4 value - type - no Int"),
    // amount - must be an Int or String that can be formatted in Int - of course good be - Int only -
    body('amount').isNumeric().withMessage("field amount should be an Int or a String") ||
    body('amount').isString().withMessage("field amount should be an Int or a String")
  ];
}

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map(error => extractedErrors.push({[error.type]: error.msg}));

  return res.status(422).json({
    errors: extractedErrors
  }).end();
}

module.exports = {
  userValidationRules,
  validate,
};