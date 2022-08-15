const {plane,airport} =require('../models')


class PlaneController{
    static async listplane(req, res){
        try{
            let planes = await plane.findAll({
                include: [airport]
            })

            //res.json(planes)
            res.render('plane.ejs', {planes})
        }catch(err){
            res.json(err)
        }

    }

    static async createplane(req, res){
        res.render('addplane.ejs')

    }

    static async create(req, res){
        try{
            const {name, type, airport_id} = req.body
            let resultPlane = await plane.create({
                name,type, airport_id
            })

            //let resultSchedule= await schedule.create({})

            //res.json(resultPlane)
            res.redirect('/plane')

        }catch(err){
            res.json(err)
        }
        
    }


    static async update (req, res){
        try{
            const id = +req.params.id
            const {name, type, airport_id} = req.body

            let result = await plane.update({
                name, type, airport_id
            },{
                where: {id}
            })

            result[0] === 1 ?
            res.json({
                message:`id ${id} has update`
            }):
            res.json({
                message:`id ${id} not update`
            })

        }catch(err){
            res.json(err)
        }


    }

    static async delete (req, res){
        try{
            const id = +req.params.id

            let result = await plane.destroy({
                where: {id}
            })

            // result === 1 ?
            // res.json({
            //     message:`id ${id} deleted`
            // }):
            // res.json({
            //     message:`id ${id}  not deleted`
            // })
            res.redirect('/plane')


        }catch(err){
            res.json(err)
        }

    }
}

module.exports = PlaneController