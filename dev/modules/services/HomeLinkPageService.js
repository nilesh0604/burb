var model = require('../models/HomeLinkPageModel');
var googleAnalyticsService = require('./GoogleAnalyticsService');

module.exports = {
	handleRequest: requestHandler
};

function requestHandler(request, onComplete) {
	var dataModel = model.create();
	googleAnalyticsService.track(dataModel.pageTitle, '/', function() {	});
	onComplete(dataModel);
}