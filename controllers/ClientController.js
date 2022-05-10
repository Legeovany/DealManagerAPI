import Client from '../models/Client.js'

class ClientController {


    static async getClient(req, res) {

        try{
            
            const client = {
                name: req.body.name,
                cpfRg: req.body.cpfRg,
            }

            if(!client.name) return res.status(400).send({message: "name is required"})
            if(!client.cpfRg) return res.status(400).send({message: "cpfRg is required"})

            const user = await Client.findOne({where: {name: client.name, cpfRg: client.cpfRg}})

            res.status(200).send({user})


        } catch(err) {
                console.log(err)
                return res.status(500).send({
                    message: "Internal server error..."
                })
            }

    }


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


    static async deleteClient(req, res) {

        try{
            
            const client = {
                id: req.body.id,
                name: req.body.name,
                cpfRg: req.body.cpfRg,
            }

            if(!client.id) return res.status(400).send({message: "id is required"})
            if(!client.name) return res.status(400).send({message: "name is required"})
            if(!client.cpfRg) return res.status(400).send({message: "cpfRg is required"})

            const clientSearch = await Client.findOne({where: {id: client.id, name: client.name, cpfRg: client.cpfRg}})
            if(!clientSearch) return res.status(404).send({message: "Client not found"})

            await Client.destroy(clientSearch)

            res.status(201).send({message: "Client Deleted Successfully!"})


        } catch(err) {
                console.log(err)
                return res.status(500).send({
                    message: "Internal server error..."
                })
            }
    }


    static async updateClient(req, res) {

        try{
            
            const client = {
                id: req.body.id,
                name: req.body.name,
                email: req.body.email,
                cpfRg: req.body.cpfRg,
                phoneNumber: req.body.phoneNumber
            }

            if(!client.id) return res.status(400).send({message: "id is required"})

            const clientSearch = await Client.findOne({where: {id: client.id}})
            if(!clientSearch) return res.status(404).send({message: "Client not found"})

            await Client.update(client, {where: {id: client.id}})

            res.status(201).send({message: "Update Successfull!"})


        } catch(err) {
                console.log(err)
                return res.status(500).send({
                    message: "Internal server error..."
                })
            }
    }

}

export default ClientController;