var mongoose = require('mongoose');

// connection config
const HOST = process.env.DATABASE_HOST;
const DB_NAME = process.env.DATABASE_NAME;
const CONNECTION_STRING = `mongodb://${HOST}/${DB_NAME}`;

// db connection
mongoose.connect(CONNECTION_STRING).catch(function (reason) {
    console.log('Unable to connect to the mongodb instance. Error: ', reason);
});

module.exports = mongoose;