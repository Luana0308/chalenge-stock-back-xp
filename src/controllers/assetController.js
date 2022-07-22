const service = require('../services/assetService')

const getByAllAsset = async (_req, res) => {
  const result = await service.getByAllAsset()
  res.status(200).json(result)
}

const getByIdAsset = async (req, res) => {
  const { id } = req.params
  const result = await service.getByIdAsset(id)
  res.status(200).json(result)
}

const getAssetByClientId = async (req, res) => {
  const { id } = req.params
  const result = await service.getAssetByClientId(id)
  res.status(200).json(result)
}

module.exports = {
  getByIdAsset,
  getByAllAsset,
  getAssetByClientId
}
