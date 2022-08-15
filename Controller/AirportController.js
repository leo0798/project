const {airport,plane} =require('../models')


class AirportController{
    static async listairport(req, res){
        try{
            let airports = await airport.findAll()
            
           // res.json(airports)
            res.render('airport.ejs', {airports})

        }catch(err){
            res.json(err)
        }
    }

    static async createairport(req, res){
        res.render('addairport.ejs')
    }

    static async create(req, res){
        try{
            const {name, location} = req.body
            let resultAirport = await airport.create({
                name,location
            })

            //let resultPlane= await plane.create({})
            //res.json(resultAirport)
            res.redirect('/airport')
        }catch(err){
            res.json(err)
        }
        
    }

    static async updatePage(req, res){

    }

    static async update(req, res){
        try{
            const id = +req.params.id
            const {name, location} = req.body

            let result = await airport.update({
                name, location
            },{
                where: {id}
            })

            result[0] === 1 ?
            res.json({
                message:`airport with id ${id} has update`
            }):
            res.json({
                message:`id ${id} not update`
            })

        }catch(err){
            res.json(err)
        }

    }
    static async delete(req, res){
        try{
            const id = +req.params.id

            let result = await airport.destroy({
                where: {id}
            })

            // result === 1 ?
            // res.json({
            //     message:`airport with id ${id} has deleted`
            // }):
            // res.json({
            //     message:`id ${id}  not deleted`
            // })
            res.redirect('/airport')

        }catch(err){
            res.json(err)
        }
    }

}

module.exports = AirportController