var express = require('express');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');


var app = express();

app.use(express.static(__dirname + 'client'));
app.use(express.static(__dirname + 'client/styles'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var port = process.env.PORT || 1337;
app.set('port', port);

app.get('/comments.json', function(req, res){
  fs.readFile('comments.json', function(err, data){
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  });
});
app.post('/comments.json', function(req, res){
  console.log('posting');
  fs.readFile('comments.json', function(err, data){
    var comments = JSON.parse(data);
    comments.push(req.body);
    fs.writeFile('comments.json', JSON.stringify(comments, null, 4), function(err){
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(comments));
    });
  });
});

app.get('/*', function(req, res){
  res.sendFile('client/index.html', {root: __dirname});
})

app.listen(app.get('port'), function(){
  console.log("Listening at port " + port);
});