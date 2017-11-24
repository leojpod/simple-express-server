//
// # SimpleServer
//
// A simple chat server using Socket.IO, Express, and Async.
//
const http = require('http')
const path = require('path')

const express = require('express')

//
// ## SimpleServer `SimpleServer(obj)`
//
// Creates a new instance of SimpleServer with the following options:
//  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.
//
const mainRouter = express()
const server = http.createServer(mainRouter)

mainRouter.use(express.static(path.resolve(__dirname, 'public')))

const apiRouter = express.Router()

apiRouter.use(express.json())
apiRouter.post('/process-text', (request, response) => {
  if (request.body && request.body.content) {
    let content = request.body.content
    // TODO put some more advance processing here:
    content = content.toUpperCase()
    response.status(200).json({content})
  } else {
    response.status(400).send('wrong payload')
  }
})

mainRouter.use('/api', apiRouter)

server.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0', function () {
  const addr = server.address()
  console.log('Simple server listening at', addr.address + ':' + addr.port)
})
