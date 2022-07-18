const {
  sequelize, dataTypes,
  checkModelName, checkPropertyExists
} = require('sequelize-test-helpers')

const ClientModel = require('../../../database/models/client')

describe('src/models/Client', () => {
  const Model = ClientModel(sequelize, dataTypes)
  const instance = new Model()
  const properties = ['id', 'name', 'email', 'password', 'value']

  checkModelName(Model)('Client')
  properties.forEach(checkPropertyExists(instance))
})
