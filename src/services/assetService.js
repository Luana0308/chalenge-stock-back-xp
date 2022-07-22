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

const getAssetByClientId = async (id) => {
  const result = await repositoryInvestment.getByClientId(id)
  return result
}
module.exports = {
  getByIdAsset,
  getByAllAsset,
  getAssetByClientId
}
