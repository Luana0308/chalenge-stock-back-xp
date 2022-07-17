const model = require('../database/models')

const findAsset = async () => {
  return await model.Assets.findAll({
    attributes: ['id', 'nameAssest', 'qtdAssests', 'valueAssest']
  })
}

const findAssetByPk = async (id) => {
  return await model.Assets.findByPk(id, {
    attributes: ['id', 'qtdAssests', 'valueAssest']
  })
}

module.exports = {
  findAssetByPk,
  findAsset
}
