const mongoose=require("mongoose")
const AgentSchema = new mongoose.Schema({
    username: {
      type: String,
      required: [true, "username is required"],
    },
    password:{
      type:String,
      required: [true, "password is required"],
    },
})

const Agent = mongoose.model("agent", AgentSchema);
module.exports = Agent