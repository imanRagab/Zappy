var Twitter = require('twitter');
var Tweet = require('../models/tweet');

var twitterClient = new Twitter({
    
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});


// fetch tweets function

module.exports.fetch = function() {

    Tweet.findOne({}, {}, { sort: { 'twitter_id' : -1 } }, function(err, tweet) { // get very last stored tweet

        var last_tweet_id = tweet.twitter_id;

        var params = {
            screen_name: 'fictionfone1',
            since_id: last_tweet_id, 
            trim_user: true
        };

        twitterClient.get('statuses/user_timeline', params, function(error, tweets, response) {
            if (!error) {
                // store tweets 
                store(tweets);
            }
        });

    });    
} 

// store tweets function

store = function (tweets) { 

    for(var i = 0; i < tweets.length - 1; i++)
    {
        var tweet = new Tweet({            
            twitter_id: tweets[i].id,
            tweet_text: tweets[i].text
        });
        tweet.save();
        console.log(tweet)
    }
}
