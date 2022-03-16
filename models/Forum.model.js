const { default: mongoose } = require("mongoose");
const { Schema, model } = require("mongoose");

const forumSchema = new Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
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

const ForumModel = model("Forum", forumSchema);

module.exports = ForumModel;