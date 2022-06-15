const Router = require('express')
const router = new Router()
const UserController = require('../controllers/userController')

//router.post('/', UserController.create)
router.get('/', UserController.getALL)
router.get('/:id', UserController.getOne)
router.delete('/:id', UserController.deleteOneUser)
router.put('/', UserController.updateUser)

module.exports = router
