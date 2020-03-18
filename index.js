const server = require('./src/server');
const dotenv = require('dotenv');
const connection = require('./config/dbConn')
const loggingListener = require('./src/events/logging.listener');
const logEmitter = require('./src/events/logEmitter');
dotenv.config();

if (process.env.APP_NAME) {
    loggingListener();
    connection.authenticate().then(() => {
        if(process.env.NODE_ENV == 'development') {
            require('./config/dbMigrate');
        }
        server.listen(process.env.APP_PORT, '0.0.0.0', () => {
            if(server.listening) {                
                logEmitter.emit('APP-INFO', {
                    logTitle: "SERVER LISTENING",
                    logMessage: `Server is listening on port ${process.env.APP_PORT}`
                });
            };
        });
    }).catch((e) => {
        logEmitter.emit('APP-FATAL', {
            logTitle: "DATABASE CANNOT CONNECT",
            logMessage: e.message
        });
    });
} else process.exit(1);