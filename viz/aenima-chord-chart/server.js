var express = require('express');

var app = express();

app.use(express.static(__dirname + '/'));

app.listen(3000);
console.log('Listening to port 3000');


