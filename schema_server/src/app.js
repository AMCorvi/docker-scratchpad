// npm packages
import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import schemaRouter from '../routes/schema.js'
import morgan from 'morgan'

const app = express()


// middleware

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:false }))

app.use('/' , schemaRouter)

export default app
