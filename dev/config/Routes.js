module.exports = {
		"get": [
		        {
		        	"route": "/",
		        	"controller": "./controllers/HomeLinkPageController"
		        },
		        {
		        	"route": "/:maindx/:maincat",
		        	"controller": "./controllers/MainProductLinkPageController"
		        },
		        {
		        	"route": "/:maindx/:subdx/:maincat/:subcat",
		        	"controller": "./controllers/SubProductLinkPageController"
		        },
		        {
		        	"route": "/:maindx/:subdx/:surprise/:maincat/:subcat",
		        	"controller": "./controllers/SubProductLinkPageController"
		        },
		        {
		        	"route": "/:maindx/details/:detailspath",
		        	"controller": "./controllers/DetailsPageController"
		        },
		 ] 	
};