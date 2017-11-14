var http = require('http');
var dt = require('./moduleDateTime');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime());
	res.write("\r\n The date and time formatted: " + dt.formattedDT());
    res.end();
}).listen(8080);