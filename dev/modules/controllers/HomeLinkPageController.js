var service = require('../services/HomeLinkPageService');

module.exports = function(request, response) {
	
	service.handleRequest(request, onComplete);
	
	function onComplete(model) {
		response.render('views/dust/index', model);
	}
}