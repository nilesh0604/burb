var appConfig = require('../../config/App');
var googleAnalytics = require('nodealytics');
var isInitialized = false;

module.exports = {
	track : googleAnalyticsTracker
};

function googleAnalyticsTracker(title, path, onComplete) {
	initialize();
	googleAnalytics.trackPage(title, path, function(error, response) {
		trackingHandler(error, response, onComplete);
	});
}

function initialize() {
	if (!isInitialized) {
		googleAnalytics.initialize(appConfig.googleAnalytics.trackingCode,
				appConfig.googleAnalytics.domain, onInitialization);
		isInitialized = true;
	}
}

function trackingHandler(error, response, onComplete) {
	if (!error && response.statusCode == 200) {
		onComplete();
	} else {
		onTrackError(error, response);
	}
}

function onInitialization(error) {
	if (error) {
		console.log("Google Analytics initialization error: " + error);
	}
}

function onTrackError(error, response) {
	console.log("Google Analytics tracking error: " + error
			+ ", response object: " + response);
}