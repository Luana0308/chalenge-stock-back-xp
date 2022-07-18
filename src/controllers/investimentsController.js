const service = require('../services/investmentService')

const postInvestmentsbuy = async (req, res) => {
  const result = await service.postInvestmentsbuy(res.locals.payload, req.body)
  res.status(201).json(result)
}

module.exports = {
  postInvestmentsbuy
}
