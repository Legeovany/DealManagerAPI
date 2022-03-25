import express from 'express'

const router = express.Router()

import ClientController from '../controllers/ClientController.js'



router.post('/add', ClientController.createClient)

//router.post('/add', ClientController.createTaskSave)

//router.get('/edit/:id', ClientController.editTask)







export default router;