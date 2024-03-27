let exp = require("express");
let expressAsyncHandler = require("express-async-handler");
let {hospitalData, agentLogin} = require("../Controllers/agent-controller");

let agentApi = exp.Router();

agentApi.post("/post-hospital-data",expressAsyncHandler(hospitalData));

agentApi.post("/post-agent-data",expressAsyncHandler(agentLogin))

module.exports = agentApi;