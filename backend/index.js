require("dotenv").config()
const express = require('express');
const dbconn = require("./config/db/dbconn")
const controllerRouter = require ("./router/Product.router")
const cors  = require("cors")

const server = express()

server.use(express.json())
server.use(cors())
server.use("/api/v1/product/",controllerRouter)
dbconn().then(()=>{
server.listen(process.env.PORT,()=>{
    console.log("Server is Running on http://loaclhost:4000/");
    
})
})

