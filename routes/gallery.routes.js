//!IMPORTS, VARIABLES & REQUIRES:
const router = require("express").Router();
const axios = require("axios");
const {getCuriosityGalleryService} = require("../services/gallery.services")

//ROUTE TO GET ALL IMAGES GALLERY ("/image-gallery"):

router.get("/", async (req, res, next)=>{
    try{       
        const response = await getCuriosityGalleryService()        
        console.log(response.data.photos)
        res.json(response.data.photos)
    }
    catch(err){
        next(err)        
    }
})


module.exports = router;