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

// GET-ROUTE TO ADMIN PROFILE ("/profile/admin"):
router.get("/admin", async (req, res, next)=>{
    const userId = req.payload._id
    try {
        const response = await UserModel.findById(userId);
        res.json(response)
    }
    catch(err){
        next(err)        
    }  
})

//ROUTE TO GET ALL BOOKINGS LIST, ONLY FOR ADMIN ("/profile/admin/all-bookings"):
router.get("/admin/all-bookings", async (req, res, next)=> {
    try {
        const response = await BookingModel.find();
        res.json(response);
    }
    catch(err){
        next(err);
    } 
})

//ROUTE TO DELETE AN USER ("/profile/delete"):
router.delete("/", async (req, res, next)=>{
    const userId = req.payload._id
    try {
        await UserModel.findByIdAndDelete(userId);
        res.json("Usuario borrado correctamente")
    }
    catch(err){
        next(err)
    }
})

module.exports = router;

