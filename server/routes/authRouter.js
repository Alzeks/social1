const Router = require('express')
const router = new Router()
const AuthController = require('../controllers/authController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', AuthController.registration)
router.post('/login', AuthController.login)
router.get('/check',// authMiddleware,
//AuthController.check)
(req, res) => {res.json('ok')})
//router.get('/registration', AuthController.getAll)


module.exports = router
