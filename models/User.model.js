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
      default: "https://img.freepik.com/vector-gratis/cute-moon-holding-planet-balloon-cartoon-ilustracion-concepto-ciencia-naturaleza-aislado-estilo-dibujos-animados-plana_138676-3428.jpg"
    }
  },
  {    
    timestamps: true,
  }
);

const UserModel = model("User", userSchema);

module.exports = UserModel;
