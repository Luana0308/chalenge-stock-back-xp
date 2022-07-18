const express = require('express')
const controller = require('../controllers/assetController')

const router = express.Router()

router.get('/', controller.getByAllAsset)
router.get('/:id', controller.getByIdAsset)

module.exports = router