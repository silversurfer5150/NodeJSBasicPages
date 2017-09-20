const http = require('http');
const fs = require('fs');

// create server passing response and request
var server = http.createServer(function(req, res) {
let fileName, contentType, responseCode;

//Initially set response code to 200 and content type to html
responseCode = 200;
contentType = 'text/html';

//asssign content type and filename
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
			// if the filename is unrecognized it falls thru to 404 page
			responseCode = 404;
			fileName = '/404.html';
		break;
	}

	// set the response header
	res.writeHead(responseCode, { 'Content-Type' : contentType });
	// read the file asset and pipe through 
	fs.createReadStream(__dirname + fileName).pipe(res);
	console.log(`Http Respnse sent: ${responseCode}  : ${req.url}`);
});

server.listen(3000, '127.0.0.1');
console.log('Server Up, now listening on port 3000...');