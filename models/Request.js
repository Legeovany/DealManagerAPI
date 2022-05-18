import { DataTypes } from "sequelize";

import conn from "../db/conn.js"



const Request = conn.define('requests', {
    description: {
        type: DataTypes.STRING,
        required: true
    },
    productQty: {
        type: DataTypes.INTEGER,
        required: true
    },
    requestId: {
        type: DataTypes.INTEGER,
        required: true
    },
    unitPrice: {
        type: DataTypes.INTEGER,
        required: true
    },
    syncData: {
        type: DataTypes.DATE,
        required: true
    },
    clientName: {
        type: DataTypes.STRING,
        required: true
    },
    clientEmail: {
        type: DataTypes.STRING,
        required: true
    },
    clientId: {
        type: DataTypes.INTEGER,
        required: true
    },
})


export default Request;