const express = require('express')
const controller = require('../controllers/clientLoginController')

const router = express.Router()

router.post('/', controller.autheticationLogin)

module.exports = router
