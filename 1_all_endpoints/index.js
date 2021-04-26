const axios = require('axios').default;
const cheerio = require("cheerio");
var fs = require('fs');

const URL = "https://www.shopdisney.co.uk/sitemap_0.xml";



axios.get(URL)
  .then(function (response) {
    let response_text = response.data;
    let $ = cheerio.load(response_text);
    let data = $("urlset").children();
    //console.log((Object.keys(data)));
	console.log("Found "+data.length + " urls")

    let final_result = [];
    for (var i = data.length - 1; i >= 0; i--) {
	    // Create a list of the strings of the locations
	    let $_ = cheerio.load(data[i]);
	    final_result.push($_("loc").text());
	}

	//console.log(final_result);

	var file = fs.createWriteStream('1_all_endpoints/final_result.txt');
	file.on('error', function(err) { 
		console.log("couldn't store the data in a file."); });
	final_result.forEach(function(link) 
		{ 
			// Store trhe data in a file
			file.write(link + '\n'); 
		});
	file.end();
	console.log("Please check the 'final_result.txt' file");
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
