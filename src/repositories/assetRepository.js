const model = require('../database/models')

const findAssetByPk = async (id) => {
  return await model.Assets.findByPk(id, {
    attributes: ['id', 'qtdAssests', 'valueAssest']
  })
}

module.exports = {
  findAssetByPk
}
