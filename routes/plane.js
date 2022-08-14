const {Router} = require('express')
const planeRoute = Router()
const {PlaneController} = require('../Controller')


planeRoute.get('/', PlaneController.listplane)
planeRoute.get('/create', PlaneController.createplane)
planeRoute.post('/create', PlaneController.create)
planeRoute.post('/update/:id', PlaneController.update)
planeRoute.get('/delete/:id', PlaneController.delete)





module.exports =planeRoute