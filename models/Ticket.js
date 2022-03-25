import { DataTypes } from "sequelize";

import conn from "../db/conn.js"
import Flight from "./Flight.js";


const Ticket = conn.define('tickets', {
    flight_id: {
        type: DataTypes.STRING,
        required: true
    },
    seat: {
        type: DataTypes.STRING,
        required: true
    },
    client_id: {
        type: DataTypes.STRING,
        required: false
    },
    purchase_date: {
        type: DataTypes.DATE,
        required: false
    },
    status: {
        type: DataTypes.STRING,
        required: true
    }
})


export default Ticket;