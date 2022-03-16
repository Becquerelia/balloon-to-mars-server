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
        default: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Full_Moon_Luc_Viatour.jpg/1015px-Full_Moon_Luc_Viatour.jpg"
    },

    date: Date,    
    hour: String,
    visibility: String
});

const EventModel = model("Event", eventSchema);

module.exports = EventModel;