var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var bandsRouter = require('./routes/bands');
var toursRouter = require('./routes/tours');
var myDbHelper = require('./helps/db');
myDbHelper.createDBAndTables();

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/bands', bandsRouter);
app.use('/api/tours', toursRouter);

module.exports = app;
