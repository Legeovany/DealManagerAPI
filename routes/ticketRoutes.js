import express from 'express'

const router = express.Router()

import TicketController from '../controllers/TicketController.js'


router.post("/buy", TicketController.buyTicket)

router.get('/getClientTickets', TicketController.getClientTickets)

router.get('/getFlightTickets', TicketController.getFlightTickets)

router.put('/refundTicket', TicketController.refundTicket)




export default router;