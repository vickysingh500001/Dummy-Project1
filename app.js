var fs = require('fs');
var http = require('http');
var url = require('url');
http.createServer((req,res) => {
    console.log('server creayed');
    var q = url.parse(req.url,true).queryl;
    if(req.url === '/submit') {
        console.log('value fetched');
    }
}).listen(2000);


