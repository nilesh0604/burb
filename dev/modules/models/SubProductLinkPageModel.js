var siteConfig = require('../../config/Site');

module.exports = {
	create: createModel
}

function createModel(request, data) {
	var data = JSON.parse(data.toString('utf-8'));
	var model = data.response.data;	
	var breadcrumb = createBreadcrumb(request, model);
	model.bread = breadcrumb.slice(0, 3);
	model.topNav = siteConfig.navigationMenu;
	model.section = request.params.maincat;
	model.panelTitle = model.name;
	model.pageTitle = model.name;
	model.totalCount = model.product_count;
	model.maindx = request.params.maindx;
	model.subdx = request.params.subdx;
	model.randomColor = new getRandomColor();
	return model;
}

function createBreadcrumb(request, model) {
	var breadcrumb = siteConfig.breadcrumbs;
	breadcrumb[2].name = model.name;
	breadcrumb[2].url = request.originalUrl;
	breadcrumb[3] = {};
	return breadcrumb;
}

function getRandomColor(){
	this.get = function(){
		return Math.floor(Math.random()*16777215).toString(16);	
	}
}