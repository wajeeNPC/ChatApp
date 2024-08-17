require('dotenv').config()
const express = require('express')
const app = express()
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const connection = require('./db')
const userAuthRoutes = require('./routes/userAuthRoutes')
const messageRoutes = require('./routes/messageRoutes')
const userRoutes = require('./routes/userRoutes')


//database
connection()

//middlewares
app.use(express.json())
app.use(cors(corsOptions));

//routes
app.use("/api/userAuth",userAuthRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/user",userRoutes)

const port = process.env.PORT || 8080;
app.listen(port, ()=> console.log(`Listening on port ${port}...`))

