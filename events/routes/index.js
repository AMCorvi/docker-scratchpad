var express = require('express')
var router = express.Router()
let http = require('http')
let jsf = require('@amcorvi/loadout/jsf')
let chance = require('@amcorvi/loadout/chance').Chance()

/* GET home page. */
router.get('/', function(req, res, next) {
  let url =
    process.env.NODE_ENV ?
    'http://schema:8000' : 'http://cor.vi:8000'

  const scheme = requestSchema(url)
  scheme
    // Successful Request
    .then(data => {
      jsf.extend('chance', () => chance)
      let output = jsf.generate(data)
      res.json(output)
    })
    // Error Handeling
    .catch(err => {
      console.error(`The following error was encountered: \n ${err}`)
      res.json({
        message: ERROR, err:     err
      })
    })
})

function requestSchema(url) {
  return new Promise(function(resolve, reject) {
    http.get(url, function(response) {
      let data = ''

      response.setEncoding('utf8')
      response.on('data', function(rxData) {
        data = rxData
      })

      response.on('end', function() {
        let parsedData = JSON.parse(data)
        return resolve(parsedData)
      })

      response.on('error', function(err) {
        reject(err)
      })
    })
  })
}

module.exports = router
