const http = require('http');
const handler= require("./routes")
const server = http.createServer(handler.handlerr);
server.listen(3000);
