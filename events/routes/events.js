var express = require('express')
var router = express.Router()

const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
const config = require('../knexfile.js')[env]
const knex = require('knex')(config)

/* GET users listing. */
router.get('/', function(req, res, next) {
  knex('events').then(data => res.json(data))
})

module.exports = router
