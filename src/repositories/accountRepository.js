const model = require('../database/models')

const findClientById = async (id) => {
  return await model.Client.findByPk(id, {
    attributes: ['id', 'name', 'value']
  })
}

module.exports = {
  findClientById

}
