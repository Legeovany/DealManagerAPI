import express from 'express'

const router = express.Router()

import ClientController from '../controllers/ClientController.js'


router.get('/get', ClientController.getClient)

router.post('/add', ClientController.createClient)

router.delete('/delete', ClientController.deleteClient)

router.put('/update', ClientController.updateClient)


export default router;