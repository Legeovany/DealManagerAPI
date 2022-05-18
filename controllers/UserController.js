import PipedriveService from '../services/pipedrive.js'
import User from '../models/User.js'



class UserController {


    static async createUser(req, res) {

        const { name, email, password } = req?.body

            if (!name) return res.status(400).send({message: "name is required"})
            if (!email) return res.status(400).send({message: "email is required"})
            if (!password) return res.status(400).send({message: "password is required"})


        const userAPI = {
            name: req.body.name,
            email: req.body.email,
            active_flag: true
        }


        let findUser = await User.findOne({where: {name: name, email: email}})

        if(!findUser) {
            const addU = await PipedriveService.addClient(userAPI)

            const userDB = {
                clientId: addU.data.data.id,
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            await User.create(userDB)
            res.status(201).send(addU.data)
        } else {
            res.status(422).send({Message: "User already exists"})
        }

    }


    static async login(req, res) {

        const { clientId, password } = req?.body

        if (!clientId) return res.status(400).send({message: "clientId is required"})
        if (!password) return res.status(400).send({message: "password is required"})


        let findUser = await User.findOne({where: {clientId: clientId, password: password}})

        if (!findUser) return res.status(400).send({message: "ClientId or Password incorrect, try again"})

        res.status(200).send({Message: "Logged in successfully"})

    }

}


export default UserController;