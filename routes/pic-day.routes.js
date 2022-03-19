//! VARIABLES & REQUIRES:

const router = require("express").Router();
const {getAstronomiPicOfTheDay} = require("../services/pic-day.services")

//ROUTE TO GET THE ASTRONOMY PIC OF THE DAY ("/pic-of-the-day"):

router.get("/", async (req, res, next)=>{
    try{       
        const response = await getAstronomiPicOfTheDay()        
        console.log(response.data)
        res.json(response.data)
    }
    catch(err){
        next(err)        
    }
})

module.exports = router;