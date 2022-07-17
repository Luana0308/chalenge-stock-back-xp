const { getHealthResponse } = require('../services/healthService')

exports.getHealth = async (req, res) => {
  const result = await getHealthResponse('')
  res.send(result)
}
