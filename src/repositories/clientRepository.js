const model = require('../database/models')

const findOneClient = async (email, password) => {
  return await model.Client.findOne({
    attributes: ['email', 'password'],
    where: { email, password }
  })
}
module.exports = {
  findOneClient
}
