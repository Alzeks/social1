const Router = require('express')
const router = new Router()
const ChatController = require('../controllers/chatController')
const UserController = require('../controllers/userController')

router.post('/', ChatController.create)
router.get('/', ChatController.getAll)
router.delete('/', ChatController.deleteChat)
 router.post('/message', ChatController.createMessage)
  router.get('/message', ChatController.getMessage)
  router.delete('/message', ChatController.deleteMessage)

module.exports = router
