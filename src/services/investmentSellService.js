const repositoriesInvestment = require('../repositories/investmentRepository')
const repositoryTransaction = require('../repositories/transactionRepository')
const repositoriesAsset = require('../repositories/assetRepository')
const repositoriesClient = require('../repositories/clientRepository')
const { messageErrorTransactionInvalid } = require('../utils/messagesErrors')

const postInvestmentsSell = async (token, investment) => {
  const { id } = token
  const { idAsset, quantityAsset } = investment

  const clientAsset = await repositoriesInvestment.getByAssetAndClient(id, idAsset)
  const brokerAssets = await repositoriesAsset.findAssetByPk(idAsset)
  const clientAccount = await repositoriesClient.findClientById(id)

  if (validateClienthasQuantityAsset(quantityAsset, clientAsset)) {
    throw messageErrorTransactionInvalid
  }

  await sellAsset(clientAsset, quantityAsset, id, idAsset)
  await updateBrokerAssetQuantity(quantityAsset, brokerAssets, idAsset)
  await updateAccountClientMoney(brokerAssets, quantityAsset, clientAccount, id)
  await repositoryTransaction.createTransaction(id, idAsset, quantityAsset, 'venda')

  return await repositoriesInvestment.getByAssetAndClient(id, idAsset)
}

const updateAccountClientMoney = async (brokerAssets, quantityAsset, clientAccount, id) => {
  const totalMoneyAsset = brokerAssets.valueAsset * quantityAsset
  const clientCurrentMoney = clientAccount.value
  const total = Number(totalMoneyAsset) + Number(clientCurrentMoney)
  await repositoriesClient.updateClientAccount(id, total)
}

const updateBrokerAssetQuantity = async (quantityAsset, brokerAssets, idAsset) => {
  const someAssetQuantity = quantityAsset + brokerAssets.quantityAsset
  await repositoriesAsset.updateAssetValue(idAsset, someAssetQuantity)
}

const sellAsset = async (clientAsset, quantityAsset, id, idAsset) => {
  const subtractAssetQuantity = clientAsset.quantityAsset - quantityAsset
  await repositoriesInvestment.updateByAssetAndClient(id, idAsset, subtractAssetQuantity)
}

const validateClienthasQuantityAsset = async (quantityAsset, clientAsset) => {
  return quantityAsset > clientAsset.quantityAsset
}

module.exports = {
  postInvestmentsSell
}
