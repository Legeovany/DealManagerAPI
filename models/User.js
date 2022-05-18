import { DataTypes } from "sequelize";

import conn from "../db/conn.js"



const User = conn.define('users', {
    clientId: {
        type: DataTypes.INTEGER,
        required: true
    },
    name: {
        type: DataTypes.STRING,
        required: true
    },
    email: {
        type: DataTypes.STRING,
        required: true
    },
    password: {
        type: DataTypes.STRING,
        required: true
    }
})


export default User;