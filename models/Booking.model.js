const { default: mongoose } = require("mongoose");
const { Schema, model } = require("mongoose");

const bookingSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    firstName: String,
    lastName: String,
    date: Date,
    time: {
        type: String,
        enum: ["22:00", "23:00", "24:00"],
    },
    numberOfPersons:{
        type: String,
        enum: ["1", "2", "3", "4"],
    },
    price: Number    
});


const BookingModel = model("Booking", bookingSchema);

module.exports = BookingModel;