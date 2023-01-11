const express = require('express')
const serviceController = require('../controllers/serviceController')
const { checkIsInRole, isLoggedIn } = require('../middlewares/authMiddleware')

const router = express.Router()


router.get('/', serviceController.getAll)
router.get('/:id', serviceController.getOne)
router.post('/', isLoggedIn, serviceController.createService)
router.put('/:id', isLoggedIn, serviceController.updateService)
router.delete('/:id', isLoggedIn, serviceController.removeService)


module.exports = router
