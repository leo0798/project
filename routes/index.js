const express = require('express');
const route = express.Router();

route.get('/',  (req, res) => { 
    // res.json({
    //     message:'Schedule flight'
    // })
     res.render('index.ejs')
})

const planeRoute = require('./plane')
const scheduleRoute = require('./schedule')
const airportRoute = require('./airport')
const routeRoute= require('./route') 
const planeschedule = require('./planeschedule')


route.use('/plane',planeRoute)
route.use('/schedule',scheduleRoute)
route.use('/airport',airportRoute)
route.use('/route',routeRoute)
route.use('/planeschedule',planeschedule)





module.exports = route