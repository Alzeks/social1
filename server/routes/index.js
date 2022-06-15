const Router = require('express')
const router = new Router()
const authRouter = require('./authRouter')
const userRouter = require('./userRouter')
const chatRouter = require('./chatRouter')
//const userRouter = require('./groopRouter')

router.use('/user', userRouter)
router.use('/auth', authRouter)
router.use('/chat', chatRouter)
router.use('/message', chatRouter)
//router.use('/groop', authRouter)



module.exports = router
