const mongoose = require("mongoose");

const userRegister = new mongoose.Schema({
     username: {
        type: String,
        required: [true, "username is required"],
        
      },
      password:{
        type:String,
        required: [true, "password is required"],
      },
      email:{
        type:String,
        required: [true, "email is required"],
      },
      
     
    });
    
    const UserRegister = mongoose.model("register", userRegister);
    module.exports = UserRegister;