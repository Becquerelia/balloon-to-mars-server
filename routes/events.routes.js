const router = require("express").Router();
const EventModel = require("../models/Event.model")

// GET-ROUTE TO GET ALL EVENTS LIST ("/astronomical-events"):

router.get("/", async (req, res, next)=>{
    try {
        const response = await EventModel.find({}, {image:1, title:1, date:1, ubication:1});
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



module.exports = router;