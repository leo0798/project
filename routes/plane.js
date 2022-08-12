const {Router} = require('express')
const planeRoute = Router()
const {PlaneController} = require('../Controller')


planeRoute.get('/', PlaneController.listplane)
planeRoute.get('/create', PlaneController.createplane)
planeRoute.post('/create', PlaneController.create)




module.exports =planeRoute