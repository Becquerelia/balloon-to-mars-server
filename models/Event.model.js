const { Schema, model } = require("mongoose");

const eventSchema = new Schema({

    name:{
        type: String,
        required: true
    },

    type: {
        type: String,
        enum: ["Moon", "Planet", "Star", "Constellation"],
        required: true
    },

    image: {
        type: String,
        default: "poner una url"
    },

    date: Date,    
    hour: String,
    ubication: String
});

const EventModel = model("Event", eventSchema);

module.exports = EventModel;