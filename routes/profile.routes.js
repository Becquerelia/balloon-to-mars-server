//! VARIABLES & REQUIRES:
const router = require("express").Router();
const UserModel = require("../models/User.model")
const BookingModel = require("../models/Booking.model")

//! ROUTES:
// GET-ROUTE TO USER PROFILE ("/profile"):
router.get("/", async (req, res, next)=>{
    const userId = req.payload._id
    try {
        const response = await UserModel.findById(userId);
        res.json(response)
    }
    catch(err){
        next(err)        
    }  
})

// GET-ROUTE TO GET ALL BOOKINGS ("/profile/my-bookings"):
router.get("/my-bookings", async (req, res, next)=>{
    try {
        const response = await BookingModel.find();
        res.json(response)
    }
    catch(err){
        next(err)        
    }  
})

// GET-ROUTE TO ADMIN PROFILE ("/profile"):
router.get("/", async (req, res, next)=>{
    const userId = req.payload._id
    try {
        const response = await UserModel.findById(userId);
        res.json(response)
    }
    catch(err){
        next(err)        
    }  
})


module.exports = router;

