const model = require('../database/models')

const createTransaction = async (id, idAsset, qtAsset, type) => {
  return await model.Transaction.create({
    idClient: id,
    idAsset,
    qtAsset,
    type,
    createdAt: new Date()
  })
}

const getByAssetAndClient = async (idClient, idAsset) => {
  const result = await model.Transaction.findAll({
    where: {
      idClient,
      idAsset
    }
  })

  return result.map((item) => item.dataValues)
}

const getByIdClient = async (idClient) => {
  const result = await model.Transaction.findAll({
    where: {
      idClient,
      type: 'compra'
    }
  })

  return result
}

module.exports = {
  createTransaction,
  getByAssetAndClient,
  getByIdClient
}
