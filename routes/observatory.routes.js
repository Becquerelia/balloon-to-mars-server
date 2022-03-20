const router = require("express").Router();
const BookingModel = require("../models/Booking.model");


//ROUTE TO BOOKING A VISIT ("/observatory"):
router.post("/", async (req, res, next)=>{
    const {user, firstName, lastName, date, time, numberOfPersons, price} = req.body;
    try {
        const response = await BookingModel.create({user, firstName, lastName, date, time, numberOfPersons, price});
        res.json(response)
    }
    catch(err){
        next(err)        
    }  
})


module.exports = router;