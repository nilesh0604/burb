var http = require('http');
var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');
var adaro = require('adaro');
var dust = require('dustjs-linkedin');
var appConfig = require('./config/App');
var router = require('./modules/Router');
var globalVar = require('./modules/utils/globalvars');

var app = express();
var server = http.createServer(app);

dust.helpers.repeat = require('./modules/dust/helper/Repeat');

app.engine('dust', adaro.dust());
app.set('view engine', 'dust');
app.set('views', __dirname);

app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('combined'));

router.bind(app);


server.listen(appConfig.server.port);
console.log('Initialized on port: '+ appConfig.server.port);

