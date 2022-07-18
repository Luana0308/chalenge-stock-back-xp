const express = require('express')
const controller = require('../controllers/accountController')
const { authToken } = require('../middleware/authToken')
const { validateNumber } = require('../middleware/validateNumber')

const router = express.Router()

router.post('/deposit', authToken, validateNumber, controller.postDepositClient)
router.post('/withdraw', authToken, validateNumber, controller.postWithdrawClient)
router.get('/:id', authToken, controller.getByIdClientValue)

module.exports = router
