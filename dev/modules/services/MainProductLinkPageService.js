var apiConfig = require('../../config/Api');
var model = require('../models/MainProductLinkPageModel');
var googleAnalyticsService = require('./GoogleAnalyticsService');
var RestClient = new require('node-rest-client').Client;
var client = new RestClient();

module.exports = {
	handleRequest : requestHandler
};

function requestHandler(request, onComplete) {
	var url = apiConfig.mainPath + request.params.maincat + apiConfig.language;
	client.get(url, function(data, response) {
		var dataModel = model.create(request, data);
		googleAnalyticsService.track(dataModel.pageTitle, '/'+ request.params.maincat, function() {});
		onComplete(dataModel);
	});
}