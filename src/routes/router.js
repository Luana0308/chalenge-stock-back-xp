require('express-async-errors')
const express = require('express')
const swaggerUtils = require('../utils/swaggerUtils')

const healthRouter = require('./healthRouter')
const clientRouter = require('./clientRouter')
const assetRouter = require('./assetRouter')
const accountRouter = require('./accountRouter')
const investimentRouter = require('./investments')
const erroInternal = require('../middleware/errorInternal')

const routers = express.Router()
swaggerUtils.setupSwagger(routers)

routers.use('/health', healthRouter)
routers.use('/login', clientRouter)
routers.use('/assets', assetRouter)
routers.use('/account', accountRouter)
routers.use('/investments', investimentRouter)

routers.use(erroInternal)

module.exports = routers
