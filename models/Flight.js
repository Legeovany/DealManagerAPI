import { DataTypes } from "sequelize";

import conn from "../db/conn.js"
import Ticket from "./Ticket.js";


const Flight = conn.define('flights', {
    flightId: {
        type: DataTypes.INTEGER,
        required: true
    },
    departureTime: {
        type: DataTypes.DATE,
        required: true
    },
    arrivalTime: {
        type: DataTypes.DATE,
        required: true
    },
    airportDeparture: {
        type: DataTypes.STRING,
        required: true
    },
    airportArrival: {
        type: DataTypes.STRING,
        required: true
    },
    seatsQty: {
        type: DataTypes.INTEGER,
        required: true
    },
    price: {
        type: DataTypes.INTEGER,
        required: true
    },
})


export default Flight;