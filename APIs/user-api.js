let exp = require("express");
let expressAsyncHandler = require("express-async-handler");
let {postUserData,userLogin,userRegister} = require("../Controllers/user-controller");
let {upload} = require("../Middleware/cloudinaryUpload");
let userApi = exp.Router();

userApi.post("/post-user-data",upload.fields([
    {name : "history"},
    {name : 'prescription'}
]),expressAsyncHandler(postUserData));


userApi.post("/login",expressAsyncHandler(userLogin));

userApi.post('/register',expressAsyncHandler(userRegister))

module.exports = userApi;