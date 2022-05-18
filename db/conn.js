import { Sequelize } from 'sequelize'


const sequelize = new Sequelize('postgres://postgres@localhost:5432/requestmanager', {dialect: 'postgres'})


try {
    sequelize.authenticate()
    console.log('DB Connected')
} catch(err) {
    console.log(`It wasn't possible to connect to the DataBase: ${err}`)
}

export default sequelize;