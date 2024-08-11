require('dotenv').config()
const express = require('express')
const app = express()
const cors = require("cors");
const connection = require('./db')
const userRoutes = require('./routes/userRoutes')
const authRoutes = require('./routes/auth')


//database
connection()

//middlewares
app.use(express.json())
app.use(cors())

//routes
app.use("/api/user",userRoutes)
app.use("/api/auth",authRoutes)

const port = process.env.PORT || 8080;
app.listen(port, ()=> console.log(`Listening on port ${port}...`))

