import express from 'express'

const router = express.Router()

import FlightController from '../controllers/FlightController.js'



router.post('/add', FlightController.createFlight)

router.delete('/delete', FlightController.deleteFlight)

router.put('/update', FlightController.updateFlight)

router.get('/flightTickets', FlightController.getFlightAvailableTickets)




export default router;