//! VARIABLES & REQUIRES:

const router = require("express").Router();
const EventModel = require("../models/Event.model");
const CommentaryModel = require("../models/Commentary.model");
const isAuthenticated = require("../middleware/isAuthenticated")

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
router.post("/", isAuthenticated, async (req, res, next)=>{
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
router.delete("/:id", isAuthenticated, async (req, res, next)=>{
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
router.patch("/:id", isAuthenticated, async (req, res, next)=>{
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

// GET-ROUTE TO SEE THE EVENT FORUM ("/astronomical-events/:id/forum"):
router.get("/:id/forum", async (req, res, next)=>{
    //const {id} = req.params
    try{
        //const response = await CommentaryModel.find({event: `ObjectId("${id}")`});
        const response = await CommentaryModel.find().populate("user")        
        res.json(response);
    }
    catch(err){
        next(err)
    }     
})

// POST-ROUTE TO ADD COMMENT AT FORUM ("/astronomical-events/:id"):
router.post("/:id", isAuthenticated, async (req, res, next)=>{
    const user = req.payload._id
    const {id} = req.params;
    const {text} = req.body;
    console.log(req.body)

    if(!text) {
        res.status(400).json({errorMessage: "Please fill all fields to continue"});
        return;
    }

    try{
        const response = await CommentaryModel.create({user, event: id, text})
        res.json(response)                  
    }
    catch(err){
        next(err)        
    }
})

// DELETE-ROUTE TO DELETE A COMMENT FROM THE FORUM ("/astronomical-events/:id/forum/delete-comment"):
router.delete("/:id/forum/:idCommentary/delete-comment", async (req, res, next)=>{
    const {idCommentary} = req.params;
    try {
        await CommentaryModel.findByIdAndDelete(idCommentary);
        res.json("Comentario borrado correctamente")        
    }
    catch(err){
        next(err)        
    }  
})


module.exports = router;