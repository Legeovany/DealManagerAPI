import { DataTypes } from "sequelize";

import conn from "../db/conn.js"



const Client = conn.define('clients', {
    name: {
        type: DataTypes.STRING,
        required: true
    },
    email: {
        type: DataTypes.STRING,
        required: true
    },
    cpfRg: {
        type: DataTypes.STRING,
        required: true
    },
    phoneNumber: {
        type: DataTypes.STRING,
        required: true
    },
})


export default Client;