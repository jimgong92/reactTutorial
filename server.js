var express = require('express');

var app = express();

app.use(express.static(__dirname + 'client'));
app.use(express.static(__dirname + 'client/styles'));

var port = process.env.PORT || 8000;
app.set('port', port);

app.get('/*', function(req, res){
  res.sendFile('client/index.html', {root: __dirname});
})

app.listen(app.get('port'), function(){
  console.log("Listening at port " + port);
});