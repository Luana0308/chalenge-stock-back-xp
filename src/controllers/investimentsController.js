const serviceBuy = require('../services/investmentBuyService')
const serviceSell = require('../services/investmentSellService')

const postInvestmentsbuy = async (req, res) => {
  const result = await serviceBuy.postInvestmentsbuy(res.locals.payload, req.body)
  res.status(201).json(result)
}

const postInvestmentsSell = async (req, res) => {
  const result = await serviceSell.postInvestmentsSell(res.locals.payload, req.body)
  res.status(201).json(result)
}

module.exports = {
  postInvestmentsbuy,
  postInvestmentsSell
}
