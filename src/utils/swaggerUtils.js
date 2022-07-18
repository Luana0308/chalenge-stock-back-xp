const setupSwagger = (app) => {
  const swaggerUi = require('swagger-ui-express')
  const swaggerFile = require('../../swagger-output.json')

  app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
}

module.exports = {
  setupSwagger
}
