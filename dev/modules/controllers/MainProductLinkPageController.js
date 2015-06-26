var service = require('../services/MainProductLinkPageService');
var global = this.globalVar;

module.exports = function(request, response) {
	service.handleRequest(request, onComplete);
	function onComplete(model) {
		this.global.shelvesObject = model.shelves;
		response.render('views/dust/list-sandbox', model);
	}
};