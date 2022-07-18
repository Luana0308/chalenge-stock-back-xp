const express = require('express')
const { authToken } = require('../middleware/authToken')
const controller = require('../controllers/investimentsController')

const router = express.Router()

router.post('/buy', authToken, controller.postInvestmentsbuy)
router.post('/sell', authToken, controller.postInvestmentsSell)

module.exports = router
