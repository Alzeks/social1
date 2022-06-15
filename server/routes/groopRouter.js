const Router = require('express')
const router = new Router()
const GroopController = require('../controllers/groopController')

router.post('/', GroopController.create)
router.get('/', GroopController.getALL)
router.get('/:id', GroopController.getOne)
router.delete('/:id', GroopController.deleteOne)

module.exports = router
