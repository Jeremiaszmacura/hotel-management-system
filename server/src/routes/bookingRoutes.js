const express = require('express')
const bookingController = require('../controllers/bookingController')

const router = express.Router()


router.get('/', bookingController.getAll)


module.exports = router
