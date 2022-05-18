import express from 'express'

const router = express.Router()

import RequestController from '../controllers/RequestController.js'



router.get('/dealsByDate', RequestController.getDealByDate)

router.get('/deals', RequestController.getDeals)




export default router;