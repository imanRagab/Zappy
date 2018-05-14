var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/zappy');


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