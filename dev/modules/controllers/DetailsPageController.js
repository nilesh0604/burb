var service = require('../services/DetailsPageService');

module.exports = function(request, response) {
	service.handleRequest(request, onComplete);
	
	function onComplete(model) {
		response.render('views/dust/details-sandbox', model);
	}
	function getRandomColor(){
		this.get = function(){
			return Math.floor(Math.random()*16777215).toString(16);	
		}
	}
};