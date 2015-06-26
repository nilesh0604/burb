var siteConfig = require('../../config/Site');

module.exports = {
		create: createModel
};

function createModel() {
	var model = {};
	model.pageTitle = "Burberry - Proof Of Concept";
	model.topNav = siteConfig.navigationMenu;
	model.bread = createBreadcrumb();
	model.maindx = -1;
	return model;
}

function createBreadcrumb() {
	var breadcrumb = siteConfig.breadcrumbs;
	breadcrumb[1] = {};
	breadcrumb[2] = {};
	breadcrumb[3] = {};
	return breadcrumb;
}