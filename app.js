var express = require('express');
var path = require('path');
var app = express();

app.get('/',function(req, res){
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/array', function(req, res){
	res.sendFile(path.join(__dirname + '/array.html'))
});

app.listen(3000, function(){
 console.log("I am listening on port 3000");
})
