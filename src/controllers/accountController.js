const service = require('../services/accountService')

const getByIdClientValue = async (req, res) => {
  const { id } = req.params
  const result = await service.getByIdClientValue(id)
  res.status(200).json(result)
}

module.exports = {
  getByIdClientValue

}
