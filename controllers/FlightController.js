import Flight from '../models/Flight.js'
import Ticket from '../models/Ticket.js'

class FlightController {


    static async createFlight(req, res) {

        const { flightId, departureTime, arrivalTime, airportDeparture, airportArrival, seatsQty, price} = req?.body

            if (!flightId) return res.status(400).send({message: "flightId is required"})
            if (!departureTime) return res.status(400).send({message: "departureTime is required"})
            if (!arrivalTime) return res.status(400).send({message: "arrivalTime is required"})
            if (!airportDeparture) return res.status(400).send({message: "airportDeparture is required"})
            if (!airportArrival) return res.status(400).send({message: "airportArrival is required"})
            if (!seatsQty) return res.status(400).send({message: "seatsQty is required"})
            if (!price) return res.status(400).send({message: "price is required"})

        const flight = {
            flightId: req.body.flightId,
            departureTime: req.body.departureTime,
            arrivalTime: req.body.arrivalTime,
            airportDeparture: req.body.airportDeparture,
            airportArrival: req.body.airportArrival,
            seatsQty: req.body.seatsQty,
            price: req.body.price,
        }


        await Flight.create(flight)


        for(let i = 0; i < seatsQty; i = i + 1 ) {
            await Ticket.create({flight_id: flightId, seat: "A" + `${i + 1}`, status: "Available"})
        }

        res.status(201).send({
            message: `Flight successfully created, here's your Flight ID: ${flightId}`})
    }

    static async getFlightAvailableTickets(req, res) {

        try{
            const flightId = req.body.flightId
            if (!flightId) return res.status(400).send({message: "Flight ID is required"})

            const flightA = await Flight.findOne({where: {flightId: flightId}})
            if(!flightA) return res.status(404).send({message: "Flight not found"})

            var flightTickets = new Array()
            let flys = await Ticket.findAll({where: {flight_id: flightId, status: "Available"}})

            if(flys.flight_id == null) return res.status(400).send({message: "No seats available!"})
        
            flightTickets.push(flys)
            res.status(200).send({flightTickets})

        } catch(err) {
            console.log(err)
            return res.status(500).send({
                message: "Internal server error..."
            })
        }
    }


    static async deleteFlight(req, res) {

        try{
            
            const flight = {
                id: req.body.flightId
            }

            if(!flight.id) return res.status(400).send({message: "flightid is required"})
            

            const ticketSearch = await Ticket.findOne({where: {flight_id: flight.id}})
            const flightSearch = await Flight.findOne({where: {flightId: flight.id}})
            if(!flightSearch) return res.status(404).send({message: "Flight not found"})

            await Flight.destroy({where: {flightId: flight.id}})
            await Ticket.destroy({where: {flight_id: flight.id}})

            res.status(201).send({message: "Flight and Flight's Tickets Deleted Successfully!"})


        } catch(err) {
                console.log(err)
                return res.status(500).send({
                    message: "Internal server error..."
                })
            }
    }


    static async updateFlight(req, res) {

        try{
            
            const flight = {
                flightId: req.body.flightId,
                departureTime: req.body.departureTime,
                arrivalTime: req.body.arrivalTime,
                airportDeparture: req.body.airportDeparture,
                airportArrival: req.body.airportArrival,
                price: req.body.price,
            }

            if(!flight.flightId) return res.status(400).send({message: "id is required"})

            const flightSearch = await Flight.findOne({where: {flightId: flight.flightId}})
            if(!flightSearch) return res.status(404).send({message: "Flight not found"})

            await Flight.update(flight, {where: {flightId: flight.flightId}})

            res.status(201).send({message: "Update Successfull!"})


        } catch(err) {
                console.log(err)
                return res.status(500).send({
                    message: "Internal server error..."
                })
            }
    }



}


export default FlightController;