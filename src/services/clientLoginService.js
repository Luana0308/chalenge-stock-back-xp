const repository = require('../repositories/clientRepository')
const { generateJWTToken } = require('../utils/token')
const { messageErrorMissingFields, messageErrorInvalidClient } = require('../utils/messagesErrors')

const authenticationLogin = async ({ email, password }) => {
  if (!email || !password) {
    throw messageErrorMissingFields
  }
  const userLogin = await repository.findOneClient(email, password)

  if (!userLogin) {
    throw messageErrorInvalidClient
  }

  const token = generateJWTToken(userLogin.dataValues)
  return { token, id: userLogin.id }
}

module.exports = {
  authenticationLogin
}
