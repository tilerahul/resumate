const express = require("express");
const app = express();
require("dotenv").config();
const authRoute = require('./router/auth-router');
const resumeRoute = require('./router/resume-router');
const sectionRoute = require('./router/section-router');
const dbConnect = require("./DBconnection/db");
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get('/api/demo', (req, res)=>{
    res.status(200).json({
        msg : "this is demo router"
    })
})

app.use("/api/v1/auth", authRoute);
app.use("/api v1/resume", resumeRoute);
app.use("/api/v1/section", sectionRoute);

dbConnect();

app.listen(process.env.PORT, ()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})