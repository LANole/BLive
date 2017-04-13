var express = require('express');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var Mailgun = require('mailgun-js');
var path = require('path');

var app = express();

app.use(favicon(path.join(__dirname, 'client/assets/images', 'TBDMEANGrey.ico')))

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({extended:true}));

app.use(express.static(path.join(__dirname, 'client')));

app.all('/*', function(req, res, next) {			    
    res.sendFile('index.html', { root: 'client'});
});

var routes = require('./server/config/routes.js');
routes(app);

var api_key = 'key-2451a2b90a87be616ab68b8f7c8f97ea';
var domain = 'sandbox7dedeb0d5d384b6a8ce4f49165204257.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
 
var data = {
  from: 'Mailgun TEST <postmaster@sandbox7dedeb0d5d384b6a8ce4f49165204257.mailgun.org>',
  to: 'tbridgeman78@gmail.com',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomness!'
};
 
mailgun.messages().send(data, function (error, body) {
  console.log(body);
});

app.listen(8000, function () {
  console.log("I'm listening...");
})