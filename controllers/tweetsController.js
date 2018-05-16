var Tweet = require('../models/tweet');

// list all tweets 

exports.list_tweets = function(req, res) {
  Tweet.find({}, function(err, tweets) {
    if (err)
      res.send(err);
    res.json(tweets);
  });
};
