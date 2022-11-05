const AddVService = require('../services/addressvalidator.srvc')

class AddressValidatorController {


    async processRequest(restRequest, restResponse) {
       console.log("adasd")
       let response = {} 
       let status = 200
       try {
            response = await AddVService.processRequest(restRequest.body)
        }catch(err){
            console.log("Unknown error")
            response = {status: "FAILURE"}
            status = 500
        }
        restResponse.status(status).json(response);
    }

}

module.exports = new AddressValidatorController();