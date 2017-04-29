//get route to survey and default to home.html
// Path package to get the correct file path for our html

var path = require('path');

module.exports = function(app){

	// HTML GET Requests
    //Path for survey html
	app.get('/survey', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

	// Default to home page
	app.use(function(req, res){
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});

}