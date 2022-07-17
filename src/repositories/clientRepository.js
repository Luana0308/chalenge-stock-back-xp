const model = require('../database/models')

const findOneClient = async (email, password) => {
  return await model.Client.findOne({
    attributes: ['id', 'name', 'email'],
    where: { email, password }
  })
}
module.exports = {
  findOneClient
}
