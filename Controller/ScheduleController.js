const {schedule,plane} =require('../models')


class ScheduleController{
    static async listschedule(req, res){
        try{
            let schedules = await schedule.findAll({
                include:[plane]
            })

            //res.json(schedules)
            res.render('schedule.ejs', {schedules})

        }catch(err){
            res.json(err)
        }

    }

    static createschedule(req, res){

    }

    static async create(req, res){
        try{
            const {timeArrivePlane, timeDeparturePlane, airport_id, plane_id} = req.body
            let resultSchedule = await schedule.create({
                timeArrivePlane, timeDeparturePlane, airport_id, plane_id
            })

            //let resultSchedule= await schedule.create({})

            res.json(resultSchedule)

        }catch(err){
            res.json(err)
        }

        
    }
    static async update(req, res){
        try{
            const id = +req.params.id
            const {timeArrivePlane, timeDeparturePlane, airport_id, plane_id} = req.body

            let result = await schedule.update({
                timeArrivePlane, timeDeparturePlane, airport_id, plane_id
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

    static  async delete(req, res){
        try{
            const id = +req.params.id

            let result = await schedule.destroy({
                where: {id}
            })

            result === 1 ?
            res.json({
                message:`id ${id} deleted`
            }):
            res.json({
                message:`id ${id}  not deleted`
            })

        }catch(err){
            res.json(err)
        }
        
    }

}

module.exports = ScheduleController