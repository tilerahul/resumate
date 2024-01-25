const express = require("express");
const app = express();
require("dotenv").config();
const authRoute = require('./router/auth-router');
const dbConnect = require("./DBconnection/db");

app.use(express.json());

app.use("/api/auth", authRoute);
dbConnect();

app.listen(process.env.PORT, ()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})