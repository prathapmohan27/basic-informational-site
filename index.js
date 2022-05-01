var http = require('http');
var fs = require('fs');
var url = require('url');
http
  .createServer(function (req, res) {
    const q = url.parse(req.url, true);
    if (q.path === '/') {
      fs.readFile('./index.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
      });
    } else if (q.path === '/about') {
      fs.readFile('./about.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
      });
    } else if (q.path === '/contact') {
      fs.readFile('./contact.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
      });
    } else {
      fs.readFile('./404.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
      });
    }
  })
  .listen(8080);
