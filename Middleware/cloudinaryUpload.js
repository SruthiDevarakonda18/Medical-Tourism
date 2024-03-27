const cloudinary = require("cloudinary").v2;
const multer = require('multer');
require('dotenv').config();

const fs = require("fs");

if(!fs.existsSync("./uploads")){
    fs.mkdirSync("./uploads");
}

cloudinary.config({
    cloud_name:'dzqksf6pj',
    api_key:'845964874983665',
    api_secret:'j7WCz6-OyZdEoP5Wn8cD3a826gE'
})


const storage = multer.diskStorage({
    destination : function(req,file,cb){
        cb(null,"./uploads");
    },
    filename : function(req,file,cb){
        cb(null,file.originalname)
    }
})

const upload = multer({storage:storage});
module.exports = {upload,cloudinary};