var siteConfig = require('../../config/Site');

module.exports = {
	create : createModel
};

function createModel(request, data) {
	var data = JSON.parse(data.toString('utf-8'));
	var model = data.response.data;
	var breadcrumb = createBreadcrumb(request, model);
	model.bread = breadcrumb.slice(0, 2);	
	model.totalItems = calculateTotalItems(model);
	model.topNav = siteConfig.navigationMenu;
	model.section = request.params.maincat;
	model.panelTitle = model.name;
	model.pageTitle = model.name;
	model.maindx = request.params.maindx;
	model.subdx = -1;
	model.randomColor = new getRandomColor();
	return model;
}

function calculateTotalItems(model) {
	var total = 0;
	for (var i = 0; i < model.shelves.length; i++) {
		total += model.shelves[i].products.length;
	}
	return total;
}

function createBreadcrumb(request, model) {
	var breadcrumb = siteConfig.breadcrumbs;
	breadcrumb[1].name = model.name;
	breadcrumb[1].url = request.originalUrl;
	breadcrumb[2] = {};
	breadcrumb[3] = {};
	return breadcrumb;
}

function getRandomColor(){
	this.get = function(){
		return Math.floor(Math.random()*16777215).toString(16);	
	}
}