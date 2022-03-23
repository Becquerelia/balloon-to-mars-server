const router = require("express").Router();
const BookingModel = require("../models/Booking.model");
const isAuthenticated = require("../middleware/isAuthenticated")
const isLoggedIn = require("../middleware/isAdmin")
const isAdmin = require ("../middleware/isAdmin.js")
const stripe = require("stripe")(process.env.STRIP_KEY)



//ROUTE TO BOOKING A VISIT ("/observatory"):
router.post("/", isAuthenticated, async (req, res, next)=>{
    //console.log(req.payload)
    const {firstName, lastName, date, time, numberOfPersons, price} = req.body;
    const user = req.payload._id
    try {

        const response = await BookingModel.create({user, firstName, lastName, date, time, numberOfPersons, price});
        res.json(response)
    }
    catch(err){
        next(err)        
    }  
})

//ROUTE TO GET ALL BOOKINGS LIST ("/observatory/all-bookings"):
router.get("/all-bookings", async (req, res, next)=> {
    try {
        const response = await BookingModel.find();
        res.json(response);
    }
    catch(err){
        next(err);
    } 
})

//ROUTE TO PAYMENT BOOKING (/observatory/create-payment-intent):
router.post("/create-payment-intent", async (req, res) => {
    const { item } = req.body;
    //console.log(item)
    const response = await BookingModel.findById(item._id)
    const priceToPay = response.price * 100  
    // Create a PaymentIntent:
     const paymentIntent = await stripe.paymentIntents.create({
       amount: priceToPay,
       currency: "eur",
       automatic_payment_methods: {
         enabled: true,
       },
     });  
     res.send({
       clientSecret: paymentIntent.client_secret,
     });
});


module.exports = router;