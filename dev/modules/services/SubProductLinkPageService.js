var apiConfig = require('../../config/Api');
var model = require('../models/SubProductLinkPageModel');
var googleAnalyticsService = require('./GoogleAnalyticsService');
var RestClient = new require('node-rest-client').Client;
var client = new RestClient();

module.exports = {
	handleRequest : requestHandler
};

function requestHandler(request, onComplete) {
	var subPath = "/" + ((request.originalUrl).split("/").slice(3)).join("/");
	var url = apiConfig.mainPath + subPath + apiConfig.language;
	client.get(url, function(data, response) {
		var dataModel = model.create(request, data);
		googleAnalyticsService.track(dataModel.pageTitle, subPath, function() { });
		onComplete(dataModel);
	});
}