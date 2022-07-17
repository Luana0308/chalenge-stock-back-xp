const { messageErrorValueInvalid } = require('../utils/messagesErrors')

const validateNumber = (req, res, next) => {
  const { value } = req.body
  if (!value || value === 0 || value < 0) {
    throw messageErrorValueInvalid
  }

  next()
}
module.exports = {
  validateNumber
}
