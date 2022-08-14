const {Router} = require('express')
const airportRoute = Router()
const {AirportController} = require('../Controller')


airportRoute.get('/', AirportController.listairport)
airportRoute.get('/create', AirportController.createairport)
airportRoute.post('/create', AirportController.create)
airportRoute.post('/update/:id', AirportController.update)
airportRoute.get('/delete/:id', AirportController.delete)




module.exports = airportRoute