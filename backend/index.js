const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')

// database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log('db is connected')
  } catch (err) {
    console.log(err)
  }
}

// middlewares
dotenv.config()
app.use(express.json())
app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)

// listing
app.listen(process.env.PORT, () => {
  connectDB()
  console.log(`app is running on port ${process.env.PORT}`)
})

// ZHVJFtTeXjfYSinp
// mdbaizedhasans
