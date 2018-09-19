var http = require('http');
var fs = require('fs');

var html = fs.readFileSync(__dirname + '/index.html', 'utf8');

http.createServer(function(req, res){

    res.writeHead(200, {'Content-Type' : 'text/html'});
    var message = 'Hello World...';
    html = html.replace('{message}', message);
    res.end(html);
    
}).listen(3000, '127.0.0.1');