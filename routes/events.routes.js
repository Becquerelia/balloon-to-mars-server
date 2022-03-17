//! REQUIRES:

const router = require("express").Router();
const EventModel = require("../models/Event.model")

//! ROUTES:

// GET-ROUTE TO GET ALL EVENTS LIST ("/astronomical-events"):
router.get("/", async (req, res, next)=>{
    try {
        const response = await EventModel.find({}, {image:1, title:1, date:1, visibility:1});
        res.json(response)
    }
    catch(err){
        next(err)        
    }  
})

// GET-ROUTE TO GET EVENT DETAILS ("/astronomical-events/:id"):
router.get("/:id", async (req, res, next)=>{
    const {id} = req.params
    try {
        const response = await EventModel.findById(id);
        res.json(response)
    }
    catch(err){
        next(err)        
    }  
})

// POST-ROUTE TO ADD ASTRONOMICAL EVENTS ("/astronomical-events"):
router.post("/", async (req, res, next)=>{
    const {title, description, image, date, hour, visibility} = req.body;
    try {
        const response = await EventModel.create({title, description, image, date, hour, visibility});
        res.json(response)
    }
    catch(err){
        next(err)        
    }  
})

// DELETE-ROUTE TO DELETE ASTRONOMICAL EVENT ("/astronomical-events/:id"):
router.delete("/:id", async (req, res, next)=>{
    const {id} = req.params;
    try {
        await EventModel.findByIdAndDelete(id);
        res.json("Evento borrado correctamente")        
    }
    catch(err){
        next(err)        
    }  
})

// PATCH-ROUTE TO EDIT ASTRONOMICAL EVENT ("/astronomical-events/:id"):
router.patch("/:id", async (req, res, next)=>{
    const {id} = req.params;
    const {title, description, image, date, hour, visibility} = req.body;
    try {
        await EventModel.findByIdAndUpdate(id, {title, description, image, date, hour, visibility});
        res.json("Evento actualizado correctamente")        
    }
    catch(err){
        next(err)        
    }  
})



module.exports = router;