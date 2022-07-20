const service = require('../services/clientLoginService')

const autheticationLogin = async (req, res) => {
  const clientResponse = await service.authenticationLogin(req.body)
  res.status(200).json(clientResponse)
}

module.exports = {
  autheticationLogin
}
