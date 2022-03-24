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
    
    imageUrl: {
      type: String,
      default: "https://i.pinimg.com/736x/8f/f4/1e/8ff41ebff1d68044c5a8bf185b455ac9--sun-logo.jpg"
    }
  },
  {    
    timestamps: true,
  }
);

const UserModel = model("User", userSchema);

module.exports = UserModel;
