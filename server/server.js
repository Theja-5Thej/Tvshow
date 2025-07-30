const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const path = require("path")
const dotenv= require('dotenv')
dotenv.config();

const authRoutes = require("./routes/authroutes");
const tvShowRoutes = require("./routes/tvshowsroute")



const app = express();


app.use(cors());
app.use(express.json())

app.use('/api/auth', authRoutes);
app.use('/api/tvshows', tvShowRoutes);
const port = process.env.PORT || 5000;


app.get('/',(req,res)=>{
    res.json({message:'Hello'})
    
})

app.listen(port,()=>{
    console.log("Running port on " + port)
})