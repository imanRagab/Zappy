var mongoose = require('../config/db');
var Schema = mongoose.Schema;

// define db schema 
var tweetSchema = new Schema({

    twitter_id: {
        type: Number,
        unique: true
    },

    tweet_text: {
        type: String
    }
});

module.exports = mongoose.model('Tweet', tweetSchema, 'tweets');
