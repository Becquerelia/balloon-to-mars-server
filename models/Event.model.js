const { Schema, model } = require("mongoose");

const eventSchema = new Schema({

    title:{
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    image: {
        type: String,
        enum: ["Moon", "Planets", "Eclipse", "Meteor Shower"],
        default: "https://i.pinimg.com/736x/8f/f4/1e/8ff41ebff1d68044c5a8bf185b455ac9--sun-logo.jpg"
    },

    date: Date,    
    hour: String,
    visibility: String
});

const EventModel = model("Event", eventSchema);

module.exports = EventModel;