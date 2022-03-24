const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true     
    },

    city: String,
    country: String,
    
    email: {
      type: String,
      unique: true,
      required: true
    },

    password: String,

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user"
    },
    
    profilePic: String
  },
  {    
    timestamps: true,
  }
);

const UserModel = model("User", userSchema);

module.exports = UserModel;
