const {plane,airport} =require('../models')



class PlaneController{
    static async listplane(req, res){
        try{
            let planes = await plane.findAll()

            res.json(planes)
        }catch(err){
            res.json(err)
        }

    }

    static async createplane(req, res){


    }

    static async create(req, res){
        try{
            const {name, airport_id} = req.body
            let resultPlane = await plane.create({
                name,airport_id
            })

            let resultairport= await route.create({})


            res.json(resultPlane)
        }catch(err){
            res.json(err)
        }
        
    }

}

module.exports = PlaneController