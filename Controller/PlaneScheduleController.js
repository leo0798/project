const {planeschedule, plane, schedule} = require('../models')


class PlaneScheduleController{
    static async getPlaneSchedule(req, res){
        try{
            let planeschedules = await planeschedule.findAll({
                include: [plane,schedule]
            })

            
            res.json(planeschedules)
            //res.render('airport.ejs', {airports})

        }catch(err){
            res.json(err)
        }

    }

    static async createPlaneSchedule(req, res){
        try{
            const {planeId, scheduleId} = req.body

            let result = await planeschedule.create({
                planeId: +planeId,
                scheduleId: +scheduleId
            })
            res.json(result)

        }catch(err){
            res.json(err)
        }

    }



}


module.exports = PlaneScheduleController