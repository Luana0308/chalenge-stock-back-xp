const repository = require('../repositories/assetRepository')
const repositoryInvestment = require('../repositories/investmentRepository')
const { messageErrorAssetNotExist } = require('../utils/messagesErrors')

const getByAllAsset = async () => {
  const allAsset = await repository.findAsset()
  return allAsset
}

const getByIdAsset = async (id) => {
  const asset = await repository.findAssetByPk(id)

  if (!asset) { throw messageErrorAssetNotExist }

  return asset
}

const getAssetByIdClient = async (id) => {
  const result = await repositoryInvestment.getByIdClient(id)

  const assetsVenda = {}
  const assetsCompra = {}
  const response = {}

  result.forEach(element => {
    if (element.dataValues.type === 'compra') {
      assetsCompra[element.dataValues.idAsset] = 0
    } else {
      assetsVenda[element.dataValues.idAsset] = 0
    }
  })

  result.forEach(element => {
    if (element.dataValues.type === 'compra') {
      assetsCompra[element.dataValues.idAsset] += element.dataValues.qtAsset
    } else {
      assetsVenda[element.dataValues.idAsset] += element.dataValues.qtAsset
    }
  })

  for (const key in assetsCompra) {
    if (assetsVenda[key] !== undefined) {
      response[key] = { quantity: assetsCompra[key] - assetsVenda[key] }
    } else {
      response[key] = { quantity: assetsCompra[key] }
    }
  }

  result.forEach(element => {
    response[element.dataValues.idAsset].value = element.dataValues.asset.valueAsset
    response[element.dataValues.idAsset].id = element.dataValues.asset.id
    response[element.dataValues.idAsset].idClient = element.dataValues.idClient
    response[element.dataValues.idAsset].name = element.dataValues.asset.nameAsset
  })

  return response
}
module.exports = {
  getByIdAsset,
  getByAllAsset,
  getAssetByIdClient
}
