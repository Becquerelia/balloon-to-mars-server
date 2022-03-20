const { default: mongoose } = require("mongoose");
const { Schema, model } = require("mongoose");

const bookingSchema = new Schema({

    
});


const BookingModel = model("Booking", bookingSchema);

module.exports = BookingModel;