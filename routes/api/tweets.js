var express = require('express');
var router = express.Router();
var tweetsController = require('../../controllers/tweetsController')

/* GET tweets listing. */
router.get('/', tweetsController.list_tweets);

module.exports = router;
