var service = require('../services/SubProductLinkPageService');
var global = this.globalVar;

module.exports = function(request, response) {
	service.handleRequest(request, onComplete);
	function onComplete(model) {
		model.shelves = this.global.shelvesObject;
		response.render('views/dust/sublist-sandbox', model);
	} 
};