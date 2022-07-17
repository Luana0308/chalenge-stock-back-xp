const model = require('../database/models')

const findAsset = async () => {
  return await model.Assets.findAll({
    attributes: ['id', 'nameAsset', 'qtdAssets', 'valueAsset']
  })
}

const findAssetByPk = async (id) => {
  return await model.Assets.findByPk(id, {
    attributes: ['id', 'qtdAssets', 'valueAsset']
  })
}

module.exports = {
  findAssetByPk,
  findAsset
}
