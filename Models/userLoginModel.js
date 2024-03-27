const mongoose = require("mongoose");

const userLogin = new mongoose.Schema({
     username: {
        type: String,
        required: [true, "username is required"],
        
      },
      password:{
        type:String,
        required: [true, "password is required"],
      },
      email : {
        type : String,
        required: [true,"Email is required"]
      }
     
    });
    
    const UserLogin = mongoose.model("userData", userLogin);
    module.exports = UserLogin;