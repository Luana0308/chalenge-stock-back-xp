const express = require('express')
const healthControllers = require('../controllers/healthController')

const router = express.Router()

router.get('/health', healthControllers)

module.exports = router
