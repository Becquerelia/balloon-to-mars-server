//! VARIABLES & REQUIRES:
const router = require("express").Router();
const nodemailer = require("nodemailer");

//ROUTE TO SEND A CONFIRMATORY REGISTER EMAIL ("/send-email"):

router.post("/", async (req, res, next) => {
    //console.log("Email enviado!!")

    //Create reusable transporter object:
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        post: 587,
        secure: false,
        auth: {
            user: "loma.barton@ethereal.email",
            pass: "M97fkyx4WxNrZKRTyZ"
        }
    })

    //Sending email:
    let mailInfo = await transporter.sendMail({
        from: "IronObservatory",
        to: "user@gmail.com",
        subject: "Probando envío de correos con Nodemailer :)",
        text: "Probando 1234567890000....",
        html: "<b> Hello world</b>"
    })

    //Any error?
    transporter.sendMail(mailInfo, (error, info)=>{
         if(error) {
             res.status(500).send(error.message)
         } else {
             console.log("Mensaje enviado!")
             res.status(200).json(req.body)
         }        
    })    
})

module.exports = router;