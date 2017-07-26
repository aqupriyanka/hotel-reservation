/**This class handles all the html routes */


"use strict";

(function(){
	var path = require("path");

	module.exports = function(app){

		app.get("/", function(req, res) {
		  res.sendFile(path.join(__dirname,path.normalize("../public/home.html")));

		});

		app.get("/reserve", function(req, res) {
		  res.sendFile(path.join(__dirname, path.normalize("../public/makeReservation.html")));
		});

		app.get("/view", function(req, res) {
		  res.sendFile(path.join(__dirname, path.normalize("../public/viewTables.html")));
		});

	}
})();
