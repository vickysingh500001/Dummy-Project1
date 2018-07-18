var fs = require('fs');
var http = require('http');
var url = require('url');
http.createServer((req,res) => {
    console.log('server creayed');
    var q = url.parse(req.url,true).queryl;
}).listen(2000);


