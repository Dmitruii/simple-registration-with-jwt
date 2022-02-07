const Router = require('express')
const authController = require('./authController')
const authMiddleWare = require('./middleware/authMiddleware')
const roleMiddleWare = require('./middleware/roleMiddleWare')
const router = new Router()

router.post('/registration', authController.registration)
router.post('/login', authController.login)
router.get('/users', [authMiddleWare, roleMiddleWare('USER')], authController.getUsers)

module.exports = router