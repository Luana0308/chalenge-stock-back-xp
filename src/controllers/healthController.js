const healthService = require('../services/healthService')

const getHealth = async (req, res) => {
  const result = await healthService.getHealthResponse(req.body)
  res.status(200).json(result)
}

module.exports = {
  getHealth
}
