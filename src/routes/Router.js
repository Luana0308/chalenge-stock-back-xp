require('express-async-errors')
const express = require('express')
const healthRouter = require('./healthRouter')
const ClientRouter = require('./clientRouter')
const erroInternal = require('../middleware/errorInternal')

const routers = express.Router()

routers.use('/health', healthRouter)
routers.use('/login', ClientRouter)

routers.use(erroInternal)

module.exports = routers
