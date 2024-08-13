require('dotenv').config()
const express = require('express')
const app = express()
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const connection = require('./db')
const userRoutes = require('./routes/userRoutes')

//const corsOptions = {
  //  origin: 'http://localhost:5173', // Replace with your frontend's origin
  //  credentials: true, // Enable credentials (cookies, authorization headers, etc.)
 // };


//database
connection()

//middlewares
app.use(express.json())
app.use(cors(corsOptions));

//routes
app.use("/api/user",userRoutes)

const port = process.env.PORT || 8080;
app.listen(port, ()=> console.log(`Listening on port ${port}...`))

