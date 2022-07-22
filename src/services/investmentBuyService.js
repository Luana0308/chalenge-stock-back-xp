const repositoryTransaction = require('../repositories/transactionRepository')
const repositoryInvestment = require('../repositories/investmentRepository')
const repositoryAsset = require('../repositories/assetRepository')
const repositoryClient = require('../repositories/clientRepository')
const { messageErrorTransactionInvalid } = require('../utils/messagesErrors')

const postInvestmentsbuy = async (token, investment) => {
  const { id } = token
  const { idAsset, quantityAsset } = investment

  const brokerAssets = await repositoryAsset.findAssetByPk(idAsset)
  const accountClient = await repositoryClient.findClientById(id)

  if (validateQuantityAsset(brokerAssets.quantityAsset, quantityAsset)) {
    throw messageErrorTransactionInvalid
  }

  if (!validateUserHasMoney(accountClient.value, brokerAssets.valueAsset, quantityAsset)) {
    throw messageErrorTransactionInvalid
  }

  await buyAsset(id, idAsset, quantityAsset)
  await updateBrokerAssetQuantity(idAsset, brokerAssets.quantityAsset, quantityAsset)
  await updateClientAccount(id, brokerAssets.valueAsset, quantityAsset, accountClient.value)
  await repositoryTransaction.createTransaction(id, idAsset, quantityAsset, 'compra')

  return await repositoryInvestment.getByAssetAndClient(id, idAsset)
}

const buyAsset = async (id, idAsset, quantityAsset) => {
  const currentQuantityAsset = await repositoryInvestment.getByAssetAndClient(id, idAsset)

  if (currentQuantityAsset !== null) {
    await repositoryInvestment.updateByAssetAndClient(id, idAsset, currentQuantityAsset.quantityAsset + quantityAsset)
  } else {
    await repositoryInvestment.createInvestment(id, idAsset, quantityAsset)
  }
}

const validateQuantityAsset = (brokerQuantity, userBuyQuantity) => {
  return userBuyQuantity > brokerQuantity
}

const validateUserHasMoney = (accountBalance, assetPrice, quantityAsset) => {
  const totalAssetPrice = quantityAsset * assetPrice
  return accountBalance > totalAssetPrice
}

const updateBrokerAssetQuantity = async (idAsset, quantityCurrent, quantityBought) => {
  const quantitySubtract = quantityCurrent - quantityBought
  await repositoryAsset.updateAssetValue(idAsset, quantitySubtract)
}

const updateClientAccount = async (idClient, assetPrice, quantityAsset, clientAccountMoney) => {
  const totalAssetPrice = quantityAsset * assetPrice
  const newValue = clientAccountMoney - totalAssetPrice

  await repositoryClient.updateClientAccount(idClient, newValue)
}

module.exports = {
  postInvestmentsbuy
}
