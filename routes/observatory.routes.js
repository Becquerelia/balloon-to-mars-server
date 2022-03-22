const router = require("express").Router();
const BookingModel = require("../models/Booking.model");
const isAuthenticated = require("../middleware/isAuthenticated")
const isLoggedIn = require("../middleware/isAdmin")
const isAdmin = require ("../middleware/isAdmin.js")



//ROUTE TO BOOKING A VISIT ("/observatory"):
router.post("/", isAuthenticated, async (req, res, next)=>{
    //console.log(req.payload)
    const {firstName, lastName, date, time, numberOfPersons, price} = req.body;
    const user = req.payload._id
    try {

        const response = await BookingModel.create({user, firstName, lastName, date, time, numberOfPersons, price});
        res.json(response)
    }
    catch(err){
        next(err)        
    }  
})

//ROUTE TO GET ALL BOOKINGS LIST ("/observatory/all-bookings"):
router.get("/all-bookings", async (req, res, next)=> {
    try {
        const response = await BookingModel.find();
        res.json(response);
    }
    catch(err){
        next(err);
    } 
})

module.exports = router;