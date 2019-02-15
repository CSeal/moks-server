const server = require('./server');
const path = require('path');
const setRoutes = require('./core/router')

setRoutes(path.join(__dirname, 'controllers'))
server.all('*', server.err404);