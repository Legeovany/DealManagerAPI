import Client from '../models/Client.js'
import Ticket from '../models/Ticket.js'
import Flight from '../models/Flight.js'

class TicketController {


    static async createTicket(req, res) {

        const ticket = {
            flight_id: req.body.flightId,
            seat: req.body.seat,
            client_id: req.body.client_id,
            purchaseDate: req.body.purchaseDate,
            status: req.body.status,
        }

        await Ticket.create(ticket)


        res.status(200).send('Success')
    }


    static async buyTicket(req, res) {

        try{
            
            const { flightId, seat, clientId} = req?.body

            if (!seat) return res.status(400).send({message: "param seat is required"})
            if (!flightId) return res.status(400).send({message: "Flight ID is required"})
            if (!clientId) return res.status(400).send({message: "Client ID is required"})

            const client = await Client.findOne({where: {id: clientId}})
            if(!client) return res.status(404).send({message: "Client not found"})

            let ticket = await Ticket.findOne({where: {seat: seat, status: "Available", flight_id: flightId}})
            if(!ticket) return res.status(404).send({message: "Ticket not found"})
            
            await Ticket.update({
                client_id: clientId, 
                purchase_date: new Date(),
                status: "Purchased"
            }, {where: {seat: seat, flight_id: flightId}})
    
            ticket = await Ticket.findOne({where: {seat: seat, flight_id: flightId}})

            res.status(201).send({TicketID: ticket.dataValues.id})

        } catch(err) {
            console.log(err)
            return res.status(500).send({
                message: "Internal server error..."
            })
        }
    }


    static async getClientTickets(req, res) {

        try{
        
            const { clientId} = req?.body 

            if (!clientId) return res.status(400).send({message: "Client ID is required"})

            const client = await Client.findOne({where: {id: clientId}})
            if(!client) return res.status(404).send({message: "Client not found"})

            var clientTickets = new Array()
            let tickets = await Ticket.findAll({where: {client_id: clientId}})

            if(tickets == null) return res.status(400).send({message: "No tickets found!"})
        
            clientTickets.push(tickets)
            res.status(200).send({clientTickets})

        } catch(err) {
            console.log(err)
            return res.status(500).send({
                message: "Internal server error..."
            })
        }
    }


    static async getFlightTickets(req, res) {

        try{
        
            const { flightId} = req?.body 

            if (!flightId) return res.status(400).send({message: "Flight ID is required"})

            const flight = await Flight.findOne({where: {flightId: flightId}})
            if(!flight) return res.status(404).send({message: "Flight not found"})

            var flightTickets = new Array()
            let tickets = await Ticket.findAll({where: {flight_id: flightId}})

            if(tickets == null) return res.status(400).send({message: "Tickets not found for this flight"})
        
            flightTickets.push(tickets)
            res.status(200).send({flightTickets, flight})

        } catch(err) {
            console.log(err)
            return res.status(500).send({
                message: "Internal server error..."
            })
        }
    }


    static async refundTicket(req, res) {

        try{
            
            const { flightId, seat, clientId} = req?.body

            if (!seat) return res.status(400).send({message: "seat is required"})
            if (!flightId) return res.status(400).send({message: "Flight ID is required"})
            if (!clientId) return res.status(400).send({message: "Client ID is required"})

            const client = await Client.findOne({where: {id: clientId}})
            if(!client) return res.status(404).send({message: "Client not found"})

            let ticket = await Ticket.findOne({where: {seat: seat, status: "Purchased", flight_id: flightId}})
            if(!ticket) return res.status(404).send({message: "Ticket not found"})
            
            await Ticket.update({
                client_id: null, 
                purchase_date: null,
                status: "Available"
            }, {where: {seat: seat, flight_id: flightId}})
    
            ticket = await Ticket.findOne({where: {seat: seat, flight_id: flightId}})

            res.status(201).send({message: "Ticket Refunded!",
            TicketID: ticket.dataValues})

        } catch(err) {
            console.log(err)
            return res.status(500).send({
                message: "Internal server error..."
            })
        }
    }

}

export default TicketController;