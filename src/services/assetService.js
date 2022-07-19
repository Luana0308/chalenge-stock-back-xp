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

  return {
    CodAtivo: asset.id,
    nomeAtivo: asset.nameAsset,
    QtdeAtivo: asset.qtdAssets,
    Valor: asset.valueAsset
  }
}

const getAssetByIdClient = async (id) => {
  const client = await repositoryInvestment.getByIdClient(id)
  return client
}

module.exports = {
  getByIdAsset,
  getByAllAsset,
  getAssetByIdClient
}
