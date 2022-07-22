const model = require('../database/models')

const findOneClient = async (email, password) => {
  return await model.Client.findOne({
    attributes: ['id', 'name', 'email'],
    where: { email, password }
  })
}

const findClientById = async (clientId) => {
  return await model.Client.findByPk(clientId, { attributes: ['id', 'name', 'email', 'value'] })
}

const updateClientAccount = async (id, newValue) => {
  const updateVaue = newValue < 0 ? 0 : newValue
  const result = await model.Client.update({ value: updateVaue },
    {
      where: {
        id
      }
    })

  return result
}

module.exports = {
  findOneClient,
  findClientById,
  updateClientAccount
}
