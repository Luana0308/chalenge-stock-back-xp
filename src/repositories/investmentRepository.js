const model = require('../database/models')

const createInvestment = async (id, idAsset, quantityAsset) => {
  return await model.BuyInvestment.create({
    idClient: id,
    idAsset,
    quantityAsset,
    createdAt: new Date(),
    updatedAt: new Date()
  })
}

const getByAssetAndClient = async (idClient, idAsset) => {
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

const getByClientId = async (idClient) => {
  const result = await model.BuyInvestment.findAll({
    where: {
      idClient
    }
  })

  return result
}

module.exports = {
  createInvestment,
  getByAssetAndClient,
  getByClientId,
  updateByAssetAndClient
}
