var slackEventAdapter = require('@slack/events-api').createSlackEventAdapter;
var twitterController = require('./twitterController');

var slackEvents = slackEventAdapter(process.env.SLACK_VERIFICATION_TOKEN);

module.exports.set = function(app) {

    // make the event handler route
    app.use('/slack/events', slackEvents.expressMiddleware());

    // attach listener to message event
    slackEvents.on('message', (message)=> {
        if(message.text.indexOf('go') != -1){ // if 'go' messege is typed ==> go and fetch tweets

            // fetch tweets here            
            twitterController.set();
        }
    });

    // Handle errors (see `errorCodes` export)
    slackEvents.on('error', console.error);
}