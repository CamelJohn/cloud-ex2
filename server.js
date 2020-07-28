var express = require('express');
var port = process.env.PORT || 8080;
var app = express();
var cors = require('cors');

app.use(cors());

var obj = [
    { "id": 1, "title": "hello", "body" : "world"},
    { "id": 2, "title": "hello", "body" : "world"},
    { "id": 3, "title": "hello", "body" : "world"},
    { "id": 4, "title": "hello", "body" : "world"},
  ];

app.get('/', function(req, res) {
  res.send({
    "Output" : "Hello World!",
    "descriptor" : "get route"
  });
});

app.get('/generics', function(req, res) {
  res.send(JSON.stringify(obj))
})

app.post('/', function(req, res) {
  res.send({
    "Output" : "Hello World!",
    "descriptor" : "post route",
  });
});

app.listen(port);
module.exports = app;
