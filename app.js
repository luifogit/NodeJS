var express = require('express');
var app = express();

//using enviroment variables for production paces
var port = process.env.PORT || 3000;
//middleware to map static files
app.use('/assets', express.static(__dirname + '/public'));
//template engine
app.set('view engine', 'ejs');
//routing
app.get('/', function(req, res){
    /*res.send(`<!DOCTYPE html><html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    
                </head>
                <body>
                    <h3>Hello body! ...</h3>
                <link href=assets/style.css type=text/css rel=stylesheet/>
                </body>
                </html>`);*/
    res.render('index');
});
app.get('/person/:id', function(req, res){
    res.render('person', { ID: req.params.id});
});
app.get('/api', function(req, res){
    res.json( { firstname: 'John', lastname: 'Doe' } );
});

app.listen(port);