require('express-async-errors')
const express = require('express')
const healthRouter = require('./healthRouter')
const clientRouter = require('./clientRouter')
const assetRouter = require('./assetRouter')
const accountRouter = require('./accountRouter')
const erroInternal = require('../middleware/errorInternal')

const routers = express.Router()

routers.use('/health', healthRouter)
routers.use('/login', clientRouter)
routers.use('/assets', assetRouter)
routers.use('/account', accountRouter)

routers.use(erroInternal)

module.exports = routers
