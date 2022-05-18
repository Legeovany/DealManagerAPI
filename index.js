import express from "express";

const app = express()

import conn from './db/conn.js'
import Request from './models/Request.js'



import requestRoutes from './routes/requestRoutes.js'
import userRoutes from './routes/userRoutes.js'



app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())


app.use('/request', requestRoutes)
app.use('/user', userRoutes)




conn.sync().then(() => {
    app.listen(3000)
}).catch((err) => console.log(err))