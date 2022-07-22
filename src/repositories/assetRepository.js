const model = require('../database/models')

const findAsset = async () => {
  return await model.Asset.findAll({
    attributes: ['id', 'nameAsset', 'quantityAsset', 'valueAsset']
  })
}

const findAssetByPk = async (id) => {
  return await model.Asset.findByPk(id, {
    attributes: ['id', 'nameAsset', 'quantityAsset', 'valueAsset']
  })
}

const updateAssetValue = async (id, newValue) => {
  const updateVaue = newValue < 0 ? 0 : newValue
  const result = await model.Asset.update({ quantityAsset: updateVaue, updatedAt: new Date() },
    {
      where: {
        id
      }
    })

  return result
}

module.exports = {
  findAssetByPk,
  findAsset,
  updateAssetValue
}
