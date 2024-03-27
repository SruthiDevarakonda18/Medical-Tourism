const {cloudinary} = require("../Middleware/cloudinaryUpload"); 
const User=require("../Models/userModel")
const UserLogin = require("../Models/userLoginModel");
const bcryptjs = require("bcryptjs")
const jwt = require('jsonwebtoken')
let postUserData = async(req,res) =>{
    try {
        
        let userObj = req.body;
        console.log(userObj);
        //Saving local path into vairables
        let localHistoryPath = req.files.history[0].path;
        let localPrescriptionPath = req.files.prescription[0].path;

        // //Uploading into cloud 
        let histroyLink = await  cloudinary.uploader.upload(localHistoryPath);
        let prescriptionLink = await cloudinary.uploader.upload(localPrescriptionPath);
        
        //Get cloud URL
        userObj.history = histroyLink.url;
        userObj.prescription = prescriptionLink.url;

        let dbRes = await User.create(userObj);
        res.status(200).send({message : "success"});
    } catch (error) {
        console.log(error)
    }
}


let userLogin = async(req,res) =>{
        
            //Get data
    let userCred = req.body;
   
    const user = await UserLogin.findOne({ username: userCred.username });
    //If user Exists
    if (user) {
        //Compare the password
        if (bcryptjs.compareSync(userCred.password, user.password)) {
            //Create a jwt Token
            const token = jwt.sign({ username: user.username }, process.env.TOKEN_SECRET_KEY, { expiresIn: "2d" })
            res.status(200).send({ message: "Login Successful", user: user, token: token })
        }
       

        else {
            res.status(200).send({ message: "Please enter a valid password" });
        }
    }
    
    else {
        res.status(200).send({ message: "Please enter a valid UserName" });
    }

};


let userRegister = async(req,res) =>{
    try{
        
        let userData = req.body;
    
        // Check if email exists;

        let isEmailExists = await UserLogin.findOne({email : userData.email});
        //If email is already taken
        
        if(isEmailExists === null){
            //Hash the password
            let hashedPassword = bcryptjs.hashSync(userData.password);
            userData.password = hashedPassword;
            //Add the data in to the database
            let dbRes = await UserLogin.create(userData);
            res.status(200).send({message : "User Created"});
        }
        else{
            return res.status(201).send({message : "Email already in Use"});
        }
    }catch(e){
        
        res.status(500).send({message : "Internal Server error"})
    }


}

module.exports = {postUserData,userLogin,userRegister};