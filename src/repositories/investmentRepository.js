const model = require('../database/models')

const createInvestment = async (id, idAsset, quantityAsset) => {
  console.log('oiiii')
  return await model.BuyInvestment.create({
    idClient: id,
    idAsset,
    quantityAsset,
    createdAt: new Date(),
    updatedAt: new Date()
  })
}

const getByAssetAndClient = async (idClient, idAsset) => {
  console.log(idClient, idAsset)
  const result = await model.BuyInvestment.findOne({
    where: {
      idClient,
      idAsset
    }
  })

  return result
}

const updateByAssetAndClient = async (idClient, idAsset, newValue) => {
  console.log(idClient, idAsset)

  const result = await model.BuyInvestment.update({ quantityAsset: newValue, updatedAt: new Date() },
    {
      where: {
        idClient,
        idAsset
      }
    })

  return result
}

const getByIdClient = async (idClient) => {
  const result = await model.Transaction.findAll({
    where: {
      idClient
    },
    include: [{
      model: model.Assets,
      as: 'asset',
      required: true
    }]
  })

  return result
}

module.exports = {
  createInvestment,
  getByAssetAndClient,
  getByIdClient,
  updateByAssetAndClient
}
