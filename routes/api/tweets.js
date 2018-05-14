var express = require('express');
var router = express.Router();
var Tweet = require('../../models/tweet');

/* GET tweets listing. */
router.get('/', function(req, res, next) {

  Tweet.find({}, (err, tweets) => {
    res.end(JSON.stringify(tweets));
  });  
});

module.exports = router;
