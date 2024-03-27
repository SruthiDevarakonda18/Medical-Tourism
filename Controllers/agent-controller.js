 const Agent = require("../Models/agentModel");
const Hospital=require("../Models/hospitalModel")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
let hospitalData=async(req,res)=>{
    let Obj = req.body;
    console.log(Obj);
    let Res = await Hospital.create(Obj);
        res.status(200).send({message : "hospital registered"});
} 
let agentLogin=async(req,res)=>{
        
            //Get data
            let userCred = req.body;
            // console.log(userCred);
            const user = await Agent.findOne({ username: userCred.username });
            //If user Exists
            if (user) {
                //Compare the password
                if (user.password === userCred.password) {
                    //Create a jwt Token
                    const token = jwt.sign({ username: user.username }, process.env.TOKEN_SECRET_KEY, { expiresIn: "2d" })
                    res.status(200).send({ message: "Login Successful", user: user, token: token })
                }
               
        
                else {
                    res.status(200).send({ message: "Wrong Password" });
                }
            }
            
            else {
                res.status(200).send({ message: "Wrong UserName" });
            }
}
module.exports = {hospitalData,agentLogin};