var express = require('express');
var app = express();

var middleware = {
	requireAuthentication: function (req, res, next){
		console.log('private route hit');
		next();
	},
	logger: function (req, res, next) {
		// new Date().toString()
		console.log(req.method + ' ' + req.originalUrl);
		next();
	}
};

//app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.get('/', function (req, res) {
	res.send('Hello Express!!');
});

app.use(express.static(__dirname + '/public'));

app.listen(3000, function () {
	console.log('server starting...');
});