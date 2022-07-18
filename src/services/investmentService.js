const { Transaction } = require('../database/models')

const postInvestmentsbuy = async (token, investment) => {
  const { id } = token
  const { idAsset, qtAsset, type } = investment

  //   await repository.findClientById(id)

  await Transaction.create({
    idClient: id,
    idAsset,
    qtAsset,
    type,
    createdAt: new Date()
  })

  return {
    CodClient: id,
    CodAtivo: idAsset,
    qtdeAtivo: qtAsset
  }
}

module.exports = {
  postInvestmentsbuy
}
