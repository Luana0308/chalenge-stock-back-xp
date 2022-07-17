const service = require('../services/accountService')

const getByIdClientValue = async (req, res) => {
  const { id } = req.params
  const result = await service.getByIdClientValue(id)
  res.status(200).json(result)
}

const postDepositClient = async (req, res) => {
  const result = await service.postDepositClient(res.locals.payload, req.body)
  res.status(200).json(result)
}

module.exports = {
  getByIdClientValue,
  postDepositClient

}
