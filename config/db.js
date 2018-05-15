var mongoose = require('mongoose');

// connection config
const host = process.env.DATABASE_HOST;
const port = process.env.DATABASE_PORT;
const name = process.env.DATABASE_NAME;
const connectionString = `mongodb://${host}/${name}`;

// db connection
mongoose.connect(connectionString).catch(function (reason) {
    console.log('Unable to connect to the mongodb instance. Error: ', reason);
});;

module.exports = mongoose;