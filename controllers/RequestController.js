import PipedriveService from '../services/pipedrive.js'
import Request from '../models/Request.js'
import { Op } from "sequelize";

class RequestController {


    static async getDeals(req, res) {

        
        const opportunity = {
            userId: req.query.user_id
        }

        if(!opportunity.userId) return res.status(400).send({message: "user_id is required"})
    
        const resp = await PipedriveService.getOpportunity(opportunity)

        var obj  = [resp.data.data]
        var i = 0


        while(i < obj.length) {
            
            const deals = {
                description: resp.data.data[i].title,
                productQty: resp.data.data[i].products_count,
                requestId: resp.data.data[i].id,
                unitPrice: resp.data.data[i].value,
                syncData: resp.data.data[i].add_time,
                clientName: resp.data.data[i].owner_name,
                clientEmail: resp.data.data[i].cc_email,
                clientId: resp.data.data[i].user_id.id
            }


            const findDeals = await Request.findAll({where: {requestId: deals.requestId}})


            const dealsfoundindex = findDeals[0]

            if(!dealsfoundindex) {

                await Request.create(deals)

            }

            i++

        }

        const a = new Array()

        const dealsByUser = await Request.findAll({where: {clientId: opportunity.userId}})

        a.push(dealsByUser)

        res.status(200).send(a) 

    }
    

    static async getDealByDate(req, res) {

        const opportunity = {
            userId: req.query.user_id,
            date: req.query.date
        }

            if (!opportunity.userId) return res.status(400).send({message: "userId is required"})
            if (!opportunity.date) return res.status(400).send({message: "date is required"})
           

        let dealsByDate = await Request.findAll({where: {clientId: opportunity.userId, syncData: {[Op.gt]: opportunity.date}}})

        res.status(200).send(dealsByDate)


    }


}

export default RequestController;