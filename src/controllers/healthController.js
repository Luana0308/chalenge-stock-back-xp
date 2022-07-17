const { getHealthResponse } = require('../services/healthService')

const getHealth = async (_req, res) => {
  const result = await getHealthResponse('')
  res.status(200).json(result)
}

module.exports = {
  getHealth
}
