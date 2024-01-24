const express = require("express");
const app = express();
require("dotenv").config();
const authRoute = require('./router/auth-router');

app.use(express.json());

app.use("/api/auth", authRoute);

app.listen(process.env.PORT, ()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})