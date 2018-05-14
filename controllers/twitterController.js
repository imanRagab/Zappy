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

    var params = {screen_name: 'fictionfone1'};
    twitterClient.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            // store tweets 
            store(tweets);
        }
    });
} 

// store tweets function

store = function (tweets) { 

    for(var i = 0; i < tweets.length; i++)
    {
        var tweet = Tweet.create({            
            twitter_id: tweets[i].id,
            tweet_text: tweets[i].text
        },function(error){
                if(error){
                    console.log(error)
                }
            });
    }
}

// query tweets

module.exports.query = function() {

    tweets = Tweet.find();

}