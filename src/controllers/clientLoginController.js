const clientLoginService = require('../services/clientLoginService')

const clientLoginController = async (req, res) => {
  const tokenValid = await clientLoginService.authenticationLogin(req.body)
  res.status(200).json(tokenValid)
}

module.exports = {
  clientLoginController
}
