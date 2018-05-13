var Twitter = require('twitter');

var client = new Twitter({

    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

module.exports.set = function() {

    var params = {screen_name: 'fictionfone1'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            // store tweets 
        }
    });

}