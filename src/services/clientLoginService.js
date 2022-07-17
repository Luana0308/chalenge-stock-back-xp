const repository = require('../repositories/clientRepository')
const { generateJWTToken } = require('../utils/token')
const { messageErrorMissingFields, messageErrorInvalidFields } = require('../utils/messagesErrors')

const authenticationLogin = async ({ email, password }) => {
  if (!email || !password) {
    throw messageErrorMissingFields
  }
  const userLogin = await repository.findOneClient(email, password)

  if (!userLogin) {
    throw messageErrorInvalidFields
  }

  const token = generateJWTToken(userLogin.dataValues)
  return { token }
}

module.exports = {
  authenticationLogin
}
