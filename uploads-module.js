var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            var oldPath = files.filetoupload.filepath;
            var newPath = 'C:Users/Admin/' + files.filetoupload.originalFilename;

            fs.rename(oldPath, newPath, function(err){
                if (err) throw err;                
                
            });
            res.write('File uploaded and then moved');
            res.end();
        });
    } else {
        res.writeHead(200, { 'content-Type': 'text/html' });
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload" id=""><br>');
        res.write('<input type="submit" value="submit"></input>');
        res.write('</form>');
        res.end();
    }
}).listen(8080);






/*http.createServer(function(req, res){
    res.writeHead(200, {'content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload" id=""><br>');
    res.write('<input type="submit" value="submit"></input>');
    res.write('</form>');
    res.end();    
}).listen(8080);*/

