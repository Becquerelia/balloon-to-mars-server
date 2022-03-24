//! VARIABLES & REQUIRES:
const router = require("express").Router();
const fileUploader = require("../middleware/uploader")

//ROUTE TO UPLOAD PROFILE PIC ("/upload-pic"):
router.post("/", fileUploader.single("imageUrl"), (req, res, next)=>{
    if (!req.file) {
        next(new Error("No file uploaded!"))
        return;        
    }
    res.json({imageUrl: req.file.path})
})

module.exports = router;