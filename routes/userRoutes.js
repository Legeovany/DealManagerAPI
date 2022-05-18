import express from 'express'

const router = express.Router()

import UserController from '../controllers/UserController.js'



router.post('/addUser', UserController.createUser)

router.get('/login', UserController.login)





export default router;