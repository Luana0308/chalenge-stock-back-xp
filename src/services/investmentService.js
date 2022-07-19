const repository = require('../repositories/investmentRepository')
const repositoryAsset = require('../repositories/assetRepository')
const { messageErrorTransactionInvalid } = require('../utils/messagesErrors')

const postInvestmentsbuy = async (token, investment) => {
  const { id } = token
  const { idAsset, qtAsset, type } = investment

  const asset = await repositoryAsset.findAssetByPk(id)

  if (qtAsset > asset.qtdAssets) { throw messageErrorTransactionInvalid }

  await repository.createTransaction(id, idAsset, qtAsset, type)

  return { CodClient: id, CodAtivo: idAsset, qtdeAtivo: qtAsset, tipo: type }
}

const postInvestmentsSell = async (token, investment) => {
  const { id } = token
  const { idAsset, qtAsset, type } = investment

  const assetsInformantions = await repository.getByAssetAndClient(id, idAsset)
  const currentquantityAsset = calculateAssestByUser(assetsInformantions)

  if (qtAsset > currentquantityAsset) { throw messageErrorTransactionInvalid }

  await repository.createTransaction(id, idAsset, qtAsset, type)

  return { CodClient: id, CodAtivo: idAsset, qtdeAtivo: qtAsset, tipo: type }
}

const calculateAssestByUser = (assetsInformantions) => {
  return assetsInformantions.reduce((acc, atual) => {
    const result = atual.type === 'compra' ? +atual.qtAsset : atual.qtAsset * -1
    return result + acc
  }, 0)
}
module.exports = {
  postInvestmentsbuy,
  postInvestmentsSell
}
