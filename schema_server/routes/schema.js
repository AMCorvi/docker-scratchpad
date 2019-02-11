import express from 'express'
import schema from './helpers/mockData'

const router = express.Router()

router.get('/', function(req, res) {
  res.json(schema)
})

export default router
