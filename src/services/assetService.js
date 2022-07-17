const repository = require('../repositories/assetRepository')
const { messageErrorAssetNotExist } = require('../utils/messagesErrors')
const getByIdAsset = async (id) => {
  const asset = await repository.findAssetByPk(id)

  if (!asset) {
    throw messageErrorAssetNotExist
  }
  return asset
}

module.exports = {
  getByIdAsset
}
