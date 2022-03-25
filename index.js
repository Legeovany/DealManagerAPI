import express from "express";

const app = express()

import conn from './db/conn.js'
import Flight from './models/Flight.js'
import Client from './models/Client.js'
import Ticket from './models/Ticket.js'


import clientRoutes from './routes/clientRoutes.js'
import flightRoutes from './routes/flightRoutes.js'
import ticketRoutes from './routes/TicketRoutes.js'


app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())


app.use('/client', clientRoutes)


app.use('/flight', flightRoutes)


app.use('/ticket', ticketRoutes)


conn.sync().then(() => {
    app.listen(3000)
}).catch((err) => console.log(err))