/**
 * Database helper & functions file
 * Author: Stian W. Instebø
 * Ts: 2023
 */

/**
 * Get local enviroment variables 
 */
require('dotenv').config()

/**
 * Import mongo db library (noSQL database)
 * & setup needed variables, as well as connect to the db
 */
const { MongoClient, ObjectId } = require('mongodb');
const client = new MongoClient(process.env.MONGO_HOST);

/**
 * Connect to database
 */
(async () => await client.connect())();

/**
 * Database used for queries
 */
const db = client.db(process.env.MONGO_DB);

/**
 * Insert a new document
 * @param {*} table Name of the collection
 * @param {*} document Document to insert
 * @returns Object
 */
const insertOne = async (table, document) => {
    return new Promise(async resolve => {
        const collection = db.collection(table);
        const results = await collection.insertOne(document)
        resolve(results)
    })
}

/**
 * find multiple documents
 * @param {*} table Name of the collection
 * @param {*} match JSON match query
 * @returns Array
 */
const find = async (table, match) => {
    return new Promise(async resolve => {
        const collection = db.collection(table);
        const results = await collection.find(match).toArray()
        resolve(results)
    })
}

/**
 * Find a document based of _id
 * @param {*} table Name of the collection
 * @param {*} id Document _id
 * @returns Object
 */
const findOne = async (table, id) => {
    return new Promise(async resolve => {
        const collection = db.collection(table);
        const results = await collection.findOne({_id: new ObjectId(id)})
        resolve(results)
    })
}

/**
 * Delete multiple documents from match
 * @param {*} table Name of the collection
 * @param {*} match JSON match query
 * @returns Object
 */
const remove = async (table, match) => {
    return new Promise(async resolve => {
        const collection = db.collection(table);
        const results = await collection.deleteMany(match)
        resolve(results)
    })
}

/**
 * Delete a document based of match
 * @param {*} table Name of the collection
 * @param {*} match JSON match query
 * @returns Object
 */
const removeOne = async (table, match) => {
    return new Promise(async resolve => {
        const collection = db.collection(table);
        const results = await collection.deleteOne(match).toArray()
        resolve(results)
    })
}

/**
 * Export our functions so they 
 * can be used & accessed in other parts of the api
 */
module.exports = {
    insertOne,
    find,
    findOne,
    remove,
    removeOne
}