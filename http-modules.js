var http = require('http');
var url = require('url');
var fs = require('fs');
//var dt = require('./date-module');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var fileName = "." + q.pathname;
    //console.log(q.pathname);
    
    fs.readFile(fileName, function (err, result) {
        if (err) {
            res.writeHead(404, { 'content-Type': 'text/html' });
            return res.end('Not found!');
        }
        res.writeHead(200, { 'content-Type': 'text/html' });
        res.write(result);
        res.end();

    });
}).listen(8080);
