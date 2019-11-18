var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

app.listen(3000, () => {
  console.log(`Server started on port`);
});

module.exports = app;
