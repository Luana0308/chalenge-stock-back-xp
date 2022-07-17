const { Client } = require('../database/models')
const { generateJWTToken } = require('../utils/token')
const { messageErrorMissingFields, messageErrorInvalidFields } = require('../utils/messagesErrors')

const authenticationLogin = async ({ email, password }) => {
  if (!email || !password) {
    console.log('entrou aqui')
    throw messageErrorMissingFields
  }
  const userLogin = await Client.findOne({
    attributes: ['email', 'password'],
    where: { email, password }
  })

  if (!userLogin) {
    throw messageErrorInvalidFields
  }

  const token = generateJWTToken(userLogin.dataValues)
  return { token }
}

module.exports = {
  authenticationLogin
}
