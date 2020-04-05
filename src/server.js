const http = require('http');
const express = require('express');
const app = express();

const appMiddleware = require('./middlewares/app.middleware');
const routeIndex = require('./routes/index');

app.use(appMiddleware);
app.use(routeIndex);

const server = http.createServer(app);
const io = require('socket.io')(server);
server.on('error', function(ev) {
    logEmitter.emit('APP-ERROR', {
        logTitle: "SERVER ERROR",
        logMessage: ev.message
    });
});

module.exports = {server, io};