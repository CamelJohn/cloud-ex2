var express = require('express');
var port = process.env.PORT || 8080;
var app = express();

app.get('/', function(req, res) {
  res.send({
    "Output" : "Hello World!",
    "descriptor" : "get route"
  });
});

app.post('/', function(req, res) {
  console.log(curlData);
  res.send({
    "Output" : "Hello World!",
    "descriptor" : "post route",
    "curlData": curlData
  });
});

app.listen(port);
module.exports = app;
