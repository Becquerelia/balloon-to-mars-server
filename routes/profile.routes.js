//! VARIABLES & REQUIRES:
const router = require("express").Router();
const UserModel = require("../models/User.model")
const BookingModel = require("../models/Booking.model")
const CommentaryModel = require("../models/Commentary.model")

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

// DELETE-ROUTE TO DELETE USER ("/profile/delete"):
router.delete("/delete", async (req, res, next)=>{
    const userId = req.payload._id
    try {
        await CommentaryModel.deleteMany({ user: userId });        
        await UserModel.findByIdAndDelete(userId);
        res.json("Deleted user")        
    }
    catch(err){
        next(err)        
    }  
})

// PATCH-ROUTE TO EDIT USER ("/profile/edit"):
router.patch("/edit", async (req, res, next)=>{
    const userId = req.payload._id
    const {username, email, password, city, country, picProfileUrl} = req.body;
    try {
        await UserModel.findByIdAndUpdate(userId, {username, email, password, city, country, imageUrl:picProfileUrl});
        res.json("Updated user")        
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


module.exports = router;

