const model = require('../database/models')

const createTransaction = async (id, idAsset, quantityAsset, type) => {
  return await model.Transaction.create({
    idClient: id,
    idAsset,
    quantityAsset,
    type,
    createdAt: new Date()
  })
}

module.exports = {
  createTransaction
}
