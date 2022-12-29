// IMPORT AND CONFIGURE ENV VARIABLES
require('dotenv').config()

// IMPORT EXTERNAL LIBRARIES
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const helmet = require('helmet')

// IMPORT INTERNAL LIBRARIES
const userRoutes = require('./routes/userRoutes')
const bookingRoutes = require('./routes/bookingRoutes')
const roomRoutes = require('./routes/roomRoutes')
const commentRoutes = require('./routes/commentRoutes')
const serviceRoutes = require('./routes/serviceRoutes')

// VARIABLES
const app = express()
app.use(express.json())
app.use(cors())
app.use(helmet())
const port = process.env.APP_PORT || 4000;  // eslint-disable-line

// MIDDLEWARE
app.use(express.urlencoded({ extended: false })) // takes all url encoded data and parse to object, which we can use in request object (req.body)
app.use(express.json()) // all data send to api will be able to access as a json
app.get('/', (req, res) => {
  res.send('Welcome to Hotel!')
})

// test
app.post('/login', (req, res) => {
  res.json({ 'error': [] })
})

app.get('/login', (req, res) => {
  res.json({ 'mes': [] })
})
// konie testu

app.use('/users', userRoutes)
app.use('/bookings', bookingRoutes)
app.use('/categories', roomRoutes)
app.use('/comments', commentRoutes)
app.use('/services', serviceRoutes)
app.use((req, res) => {
  res.status(404).send('404 Error')
})
app.use(function (err, req, res) {
  console.log(err)
  res.status(500).send('500 Server Error')
})

// CONNECT TO DATABASE AND RUN SERVER
// require('./config/mongooseLocalDB')
require('./config/passport')
require('./config/mongooseAtlasDB')

mongoose.connection.on('open', function () {
  app.listen(port, function () {
    console.log(`Hotel RESTful API server started on: http://localhost:${port}`)
  })
})

mongoose.connection.on('error', function (err) {
  console.error('DB connection error ' + err)
})

module.exports = app
