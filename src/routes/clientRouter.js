const express = require('express')
const { clientLoginController } = require('../controllers/clientLoginController')

const router = express.Router()

router.post('/', clientLoginController)

module.exports = router
