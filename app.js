const http = require('http');
const fs = require('fs');

var server = http.createServer(function(req, res) {
let fileName, contentType;

	switch(req.url) {
		case '/':
		case '/home':
			contentType = 'text/html';
			fileName = '/index.html';
		break;
		case '/about':
			contentType = 'text/html';
			fileName = '/about.html';
		break;
		case '/contact':
			contentType = 'text/html';
			fileName = '/contact.html';
		break;
		case '/style.css':
			contentType = 'text/css';
			fileName = '/style.css';
		break;
		case '/nodeLogo.png':
			contentType = 'img/png';
			fileName = '/nodeLogo.png';
		break;
		case '/favicon.png':
			contentType = 'img/png';
			fileName = '/favicon.png';
		break;
		default:
			fileName = '/404.html';
		break;
	}
	res.writeHead(200, { 'Content-Type' : contentType });
	fs.createReadStream(__dirname + fileName).pipe(res);
	console.log(`Request received: ${req.url}`);
});

server.listen(3000, '127.0.0.1');
console.log('Server Up, now listening on port 3000...');