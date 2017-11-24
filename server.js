//
// # SimpleServer
//
// A simple chat server using Socket.IO, Express, and Async.
//
const http = require('http');
const path = require('path');

const express = require('express');

//
// ## SimpleServer `SimpleServer(obj)`
//
// Creates a new instance of SimpleServer with the following options:
//  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.
//
const router = express();
const server = http.createServer(router);

router.use(express.static(path.resolve(__dirname, 'public')));

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  const addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});