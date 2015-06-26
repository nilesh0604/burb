var siteConfig = require('../../config/Site');

module.exports = {
	create : createModel
};

function createModel(request, data) {
	var data = JSON.parse(data.toString('utf-8'));
	var model = data.response.data;
	model.topNav = siteConfig.navigationMenu;
	model.maindx = request.params.maindx;
	model.bread = createBreadcrumb(request, model);
	model.price = model.price.current.formatted_value,
	model.productId = model.id,
	model.swatchLable = model.media.swatch.label,
	model.productFamily = model.product_family,
	model.productSizes = model.sizes,
	model.recommendations = model.recommendations,
	model.recommendationsLen = model.recommendations.length,
	model.productDescription = model.copy.product_description,
	model.productFeatures = model.copy.product_features,
	model.shippingDetails = model.shipping_returns,
	model.prodName = model.name,
	model.productFamily = model.product_family,
	model.scarf = model.name.match(/\Scarf+/g) ? "true" : "false";
	return model;
}

function createBreadcrumb(req, model) {
	var breadcrumb = siteConfig.breadcrumbs;
	var idx = (breadcrumb[2].name == "" || !breadcrumb[2].name) ? 2 : 3;
	breadcrumb[idx].name = model.name;
	breadcrumb[idx].url = req.originalUrl;
	return breadcrumb.slice(0, (idx + 1));;
}

function getRandomColor(){
	this.get = function(){
		return Math.floor(Math.random()*16777215).toString(16);	
	}
}