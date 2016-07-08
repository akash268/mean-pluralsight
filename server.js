var express = require('express');

var env = process.env.NODE_ENV = process.env.NODE_ENV || "development";

var app = express();

app.set('views', '/server/views');
app.set('view engine', 'jade');

//matching all routes - all routing done on client side 
app.get('*',function(req,res){
	res.render('index');
});

var port =3030;
app.listen(port);
console.log('Listening on port'+port+'...');


