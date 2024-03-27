const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
      firstname: {
        type: String,
        required: [true, "firsname is required"],
        maxLength: [10, "max length can be 10"],
      },
      middlename:{
        type:String
      },
      lastname: {
        type: String,
        required: [true, "lastname is required"],
        maxLength: [10, "max length can be 10"],
      },
      dob: {
        type: Date,
        required: [true, "dob is required"],
      },
     email:{
        type:String,
        required:[true,"email is required"],
     },
     city:{
        type:String,
        required:[true,"city is required"],
     },
    phone:{
      type:String,
      required:[true,'phone number is required'],
      maxLength:[10,'phone number must be 10 digit'],
      minlength:[10,'phone number must be 10 digit']
    },
    preferredCity:{
      type:String,
      required:[true,"preferred city is required"],
    },
     specializations:{
        type:String,
        required:[true,"specializations is required"],
     }
    });
    
    const User = mongoose.model("user", userSchema);
    module.exports = User;