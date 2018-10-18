'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var path = require('path');
var app = (module.exports = loopback());
require('dotenv').config();

app.use(loopback.static('public'));

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(loopback.token());

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

boot(app, __dirname, function(err) {
  if (err) throw err;

  app.get('/logout', function(req, res, next) {
    app.models.accessToken.remove({userId: req.user.id});
    res.clearCookie('access_token');
    res.clearCookie('userId');
    req.logout();
    res.redirect('/');
  });

  if (require.main === module) app.start();
});
