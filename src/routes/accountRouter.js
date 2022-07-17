const express = require('express')
const controller = require('../controllers/accountController')
const { authToken } = require('../middleware/authToken')

const router = express.Router()

router.get('/:id', authToken, controller.getByIdClientValue)

module.exports = router
