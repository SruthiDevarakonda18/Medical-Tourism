const exp=require('express')
const app=exp();
const path=require('path')
const getConnection = require("./db");
const bodyParser = require("body-parser");
const cors = require("cors");
//connect to react app
getConnection();
app.use(exp.static(path.join(__dirname,'../client/build')))
app.use(cors());

const userApi = require("./APIs/user-api");
const agentApi=require("./APIs/agent-api")

//configure env variables
require('dotenv').config()
//add body parsing mw
app.use(exp.json())
app.use(bodyParser.json());


app.use('/user-api',userApi);

app.use('/hospitals',agentApi);
//error handler
app.use((err,req,res,next)=>{
    res.send({message:"error occured",payload:err.message})
})

//assign port num
const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`server on port ${PORT}`))
