const express = require('express')
const { authToken } = require('../middleware/authToken')
const controller = require('../controllers/investimentsController')

const router = express.Router()

router.post('/buy', authToken, controller.postInvestmentsbuy)

module.exports = router
