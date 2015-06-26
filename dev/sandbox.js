var RestClient = require('node-rest-client').Client;
 
var client = new RestClient();

client.get("https://api.burberry.com/v1/apps/ecom/pages/" + 
	"mens-tailoring-suits/?country=gb&language=gb", 
	function(data, response){
		var payload = JSON.parse(data.toString('utf-8'));
		console.log(payload.response.data)
		
	});