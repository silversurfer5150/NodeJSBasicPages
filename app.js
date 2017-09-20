const http = require('http');
const fs = require('fs');

var server = http.createServer(function(req, res) {

	switch(req.url) {
		case '/':
		case '/home':
			res.writeHead(200, {'Content-Type' : 'text/html'});
			fs.createReadStream(__dirname + '/index.html').pipe(res);
		break;
		case '/about':
			res.writeHead(200, {'Content-Type' : 'text/html'});
			fs.createReadStream(__dirname + '/about.html').pipe(res);
		break;
		case '/contact':
			res.writeHead(200, {'Content-Type' : 'text/html'});
			fs.createReadStream(__dirname + '/contact.html').pipe(res);
		break;
		case '/style.css':
			res.writeHead(200, {'Content-Type' : 'text/css'});
			fs.createReadStream(__dirname + '/style.css').pipe(res);
		break;
		case '/nodeLogo.png':
			res.writeHead(200, {'Content-Type' : 'img/png'});
			fs.createReadStream(__dirname + '/nodeLogo.png').pipe(res);
		break;
		case '/favicon.png':
			res.writeHead(200, {'Content-Type' : 'img/png'});
			fs.createReadStream(__dirname + '/favicon.png').pipe(res);
		break;
		default:
		break;
	}

});

server.listen(3000, '127.0.0.1');
console.log('Server Up, now listening on port 3000...');