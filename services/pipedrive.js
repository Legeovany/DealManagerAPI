import axios from 'axios';
import res from 'express/lib/response.js';



class PipedriveService {


    async addClient(user) {

        const data = JSON.stringify({

      "name": user.name,
      "email": user.email,
      "active_flag": user.active_flag
    
    });
    
    var config = {
      method: 'post',
      url: 'https://companydomain.pipedrive.com/api/v1/users?api_token=aed74689451601aee62eaee81c31a5890f2c4d09',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    return axios(config)
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      console.log(error);
    });
    

    }


    async getOpportunity(opportunity) {
  
    var config = {
      method: 'get',
      url: `https://companydomain.pipedrive.com/api/v1/deals/?user_id=${opportunity.userId}&term=deal&status=won&api_token=aed74689451601aee62eaee81c31a5890f2c4d09`,
      headers: { 
        'Content-Type': 'application/json'
      },
    };
  
    return axios(config)
    .then(function (response) {
      return response
      
    })
    .catch(function (error) {
      console.log(error); 
    });
    }

}

export default new PipedriveService();