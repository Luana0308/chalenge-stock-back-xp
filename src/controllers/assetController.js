const service = require('../services/assetService')

const getByIdAsset = async (req, res) => {
  const { id } = req.params
  const result = await service.getByIdAsset(id)
  res.status(200).json(result)
}

module.exports = {
  getByIdAsset
}
