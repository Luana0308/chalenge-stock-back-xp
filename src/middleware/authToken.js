const { authenticateToken } = require('../utils/token')
const { messageErrorTokenInvalid } = require('../utils/messagesErrors')

const authToken = (req, res, next) => {
  const token = req.headers.authorization
  console.log('entrou aqui @', token)

  const payload = authenticateToken(token)
  if (!payload) {
    throw messageErrorTokenInvalid
  }
  res.locals.payload = payload

  next()
}

module.exports = {
  authToken
}
