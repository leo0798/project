const {Router} = require('express')
const planescheduleRoute = Router()
const {PlaneScheduleController} = require('../Controller')


planescheduleRoute.get('/', PlaneScheduleController.getPlaneSchedule)
planescheduleRoute.post('/create', PlaneScheduleController.createPlaneSchedule)





module.exports =planescheduleRoute