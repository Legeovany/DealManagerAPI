import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('flightTickets', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})


try {
    sequelize.authenticate()
    console.log('DB Connected')
} catch(err) {
    console.log(`Não foi possível conectar ao DB: ${err}`)
}

export default sequelize;