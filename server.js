var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(__dirname + '/www'));

app.get('/*', (req,res) => {

  res.sendFile(path.join(__dirname+'/www/index.html'));

});

app.listen(process.env.PORT || 4200);
