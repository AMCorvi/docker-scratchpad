const http = require('http')

// set environment
const env = process.env.NODE_ENV || 'development'
const port = process.env.PORT || '8000'

require = require('@amcorvi/loadout/esm')(module)
const app = require('./src/app.js').default

app.set('port', port)

const server = http.createServer(app)

server.on('listening', () => console.log(`Scheme Sever now listing on port ${port}`));
server.listen(port)

