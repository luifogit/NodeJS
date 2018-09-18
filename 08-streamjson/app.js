var http = require('http');
var fs = require('fs');



http.createServer(function(req, res){
    //asking for a url

    if(req.url === '/'){
        fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res);
    }

    if(req.url === '/api'){
        res.writeHead(200, {'Content-Type' : 'application/json'});
        var obj = {
            firstname: 'John',
            secondname: 'Doe'
        };
        res.end(JSON.stringify(obj));
    }
}).listen(3000, '127.0.0.1');