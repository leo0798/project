const {airport} =require('../models')


class AirportController{
    static listairport(req, res){

    }

    static createairport(req, res){

    }

    static async create(req, res){
        try{
            const {name, location} = req.body
            let resultAirport = await airport.create({
                name,location
            })

            //let resultairport= await route.create({})


            res.json(resultAirport)
        }catch(err){
            res.json(err)
        }
        
    }


}

module.exports = AirportController