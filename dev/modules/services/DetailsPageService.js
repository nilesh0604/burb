var apiConfig = require('../../config/Api');
var model = require('../models/DetailsPageModel');
var googleAnalyticsService = require('./GoogleAnalyticsService');
var RestClient = require('node-rest-client').Client;
var client = new RestClient();

module.exports = {
	handleRequest : requestHandler
};

function requestHandler(request, onComplete) {
	var url = apiConfig.mainPath + request.params.detailspath + apiConfig.language;
	client.get(url, function(data, response) {
		var dataModel = model.create(request, data);
		googleAnalyticsService.track(dataModel.pageTitle, 
				'/'	+ request.params.detailspath, function() { });
		onComplete(dataModel);
	});
}