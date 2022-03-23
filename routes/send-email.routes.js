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
        to: "user@user.com",
        subject: "Welcome to Balloon to Mars!",
        text: "Welcome to Balloon to Mars! Congratulations, you have successfully registered. Now you can make online bookings to visit our observatory, share astronomical events with the community and participate in the forum. See you at the balloon!",
        html: "<b> Welcome to Balloon to Mars! Congratulations, you have successfully registered. Now you can make online bookings to visit our observatory, share astronomical events with the community and participate in the forum. See you at the balloon!</b>"
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