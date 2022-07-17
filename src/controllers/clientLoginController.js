const service = require('../services/clientLoginService')

const autheticationLogin = async (req, res) => {
  const tokenValid = await service.authenticationLogin(req.body)
  res.status(200).json(tokenValid)
}

module.exports = {
  autheticationLogin
}
