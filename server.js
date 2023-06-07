/**
 * Main server, start with 'node server.js'
 * Author: Stian W. Instebø
 * Ts: 2023
 */

/**
 * Get local enviroment variables 
 */
require('dotenv').config()

/**
 * Import routes file
 */
const apiRoutes = require('./routes/api');

/**
 * Import the express server
 */
const express = require('express')

/**
 * Import the body parser used for requests
 */
const bodyParser = require('body-parser')

/**
 * Defines variable 'app' and assign a port
 */
const app = express()
const port = 3001

/**
 * Set options for the 'express app'
 * app.use(bodyparser)  #sets the parser options to JSON
 * app.use(routes)      #sets the endpoint routes
 */
app.use(bodyParser.json())
app.use('/api', apiRoutes);

/**
 * Welcome endpoint
 */
app.get('/', (req, res) => {
    res.send('Hey there, welcome to the API boilerplate 👋')
})

app.listen(process.env.PORT, () => {
    console.log(`API listening on port ${process.env.PORT}`)
})