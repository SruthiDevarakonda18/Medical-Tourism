const mongoose = require("mongoose");
const HospitalSchema = new mongoose.Schema({
    hospitalname: {
      type: String,
      required: [true, "hospital name is required"],
    },
    address:{
      type:String,
      required: [true, "address is required"],
    },
    contact:{
        type:Number,
        required: [true, "contact is required"],
    },
    email:{
        type:String,
    },
    website:{
        type:String,
    },
    certificates:{
        type:String,
    },
    rating:{
        type:Number,
        required: [true, "rating is required"],
    },
    staff:{
        type:String,
    },
    suggestions:{
        type:String
    }
})

const Hospital = mongoose.model("hospital", HospitalSchema);
module.exports = Hospital;