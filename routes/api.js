/**
 * API routes accessible to the main server app
 * Author: Stian W. Instebø
 * Ts: 2023
 */

/**
 * Import the database helper
 */
const database = require('../libs/db')

/**
 * Import express middleware to use the 'Router'
 */

const express = require('express')
const router = express.Router()


/**
 * List data from database
 * path: localhost:${port}/api/list [GET]
 */
router.get('/list', (req, res, next) => {
    let match = {
        name: "test",
    }

    database.find('test', match)
    .then(response => {
        return res.json(response)
    })
    .catch(error => {
        return res.status(200).json({message: error})
    })
})

/**
 * Insert one document into the database
 * path: localhost:${port}/api/insert [POST]
 */
router.post('/insert', (req, res, next) => {
    let document = {
        name: "test",
        ts: new Date()
    }
    database.insertOne('test', document)
    .then(response => {
        return res.json(response)
    })
    .catch(error => {
        return res.status(200).json({message: error})
    })
})

/**
 * Enables the routes to be accessible from 'server.js'
 */
module.exports = router