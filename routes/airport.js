const {Router} = require('express')
const airportRoute = Router()
const {AirportController} = require('../Controller')


airportRoute.get('/', AirportController.listairport)
airportRoute.get('/create', AirportController.createairport)
airportRoute.post('/create', AirportController.create)




module.exports = airportRoute