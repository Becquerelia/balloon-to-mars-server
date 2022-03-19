const { default: mongoose } = require("mongoose");
const { Schema, model } = require("mongoose");

const commentarySchema = new Schema({

    user:{
        //type: mongoose.Schema.Types.ObjectId,
        //ref: "User"
        type: String
    },

    event:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event"
    },
    
    text:{
        type: String,
        required: true
    }

});

const CommentaryModel = model("Commentary", commentarySchema);

module.exports = CommentaryModel;