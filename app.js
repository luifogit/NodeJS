var express = require('express');
var app = express();

//using enviroment variables for production paces
var port = process.env.PORT || 3000;
//middleware to map static files
app.use('/assets', express.static(__dirname + '/public'));
//routing
app.get('/', function(req, res){
    res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet/></head><body><h3>Hello body! ...</h3></body></html>');
});
app.get('/api', function(req, res){
    res.json( { firstname: 'John', lastname: 'Doe' } );
});

app.listen(port);