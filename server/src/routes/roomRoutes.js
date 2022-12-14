const express = require('express')
const roomController = require('../controllers/roomController')

const router = express.Router()


router.get('/', roomController.getAll) // get all categories (and nested things)


module.exports = router
