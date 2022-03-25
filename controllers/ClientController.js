import Client from '../models/Client.js'

class ClientController {


    static async createClient(req, res) {

        try{
            
            const client = {
                name: req.body.name,
                email: req.body.email,
                cpfRg: req.body.cpfRg,
                phoneNumber: req.body.phoneNumber
            }

            if(!client.name) return res.status(400).send({message: "name is required"})
            if(!client.email) return res.status(400).send({message: "email is required"})
            if(!client.cpfRg) return res.status(400).send({message: "cpfRg is required"})
            if(!client.phoneNumber) return res.status(400).send({message: "phoneNumber is required"})

            await Client.create(client)

            const user = await Client.findOne({where: {name: client.name}})

            res.status(200).send({clientId: user.id})


        } catch(err) {
                console.log(err)
                return res.status(500).send({
                    message: "Internal server error..."
                })
            }
        }
    }



export default ClientController;