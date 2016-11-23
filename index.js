var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('Challenge 2');
});

app.listen(3000, function () {
  console.log('Listening on localhost:3000');
});