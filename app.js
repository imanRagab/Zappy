var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var slackEventAdapter = require('@slack/events-api').createSlackEventAdapter;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

var slackEvents = slackEventAdapter(process.env.SLACK_VERIFICATION_TOKEN);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// make the event handler route
app.use('/slack/events', [slackEvents.expressMiddleware(), indexRouter]);

// attach listener to message event
slackEvents.on('message', (message)=> {

  if(message.text.indexOf('go') != -1){ // if 'go' messege is typed ==> go and fetch tweets

  // fetch tweets here

  }
});

// Handle errors (see `errorCodes` export)
slackEvents.on('error', console.error);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
