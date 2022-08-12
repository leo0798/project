const {Router} = require('express')
const scheduleRoute = Router()
const {ScheduleController} = require('../Controller')


scheduleRoute.get('/', ScheduleController.listschedule)
scheduleRoute.get('/create', ScheduleController.createschedule)
scheduleRoute.post('/create', ScheduleController.create)




module.exports = scheduleRoute