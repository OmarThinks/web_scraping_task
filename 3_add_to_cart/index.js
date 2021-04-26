const axios = require('axios').default;
const cheerio = require("cheerio");
var fs = require('fs');

const URL = "https://www.shopdisney.co.uk/disney-store-x-men-duffle-bag-427241712880.html";




function get_csrf_token($)
{
	let token_tag = $('input[name="csrf_token"]');
    let csrf = token_tag.attr('value');
    return csrf;
}







axios.get(URL)
  .then(function (response) {
    let response_text = response.data;
    let $ = cheerio.load(response_text);
    
    let csrf = get_csrf_token($);
    console.log(csrf);


    /*let links = [];
    for (var i = data.length - 1; i >= 0; i--) {
    //console.log((Object.keys(data)));
    //console.log(((data)));
    //console.log(((data.text())));
	//console.log("Found "+data.length + " products");
	let product = cheerio.load(data[i]);
	//console.log(Object.entries(product));
	//console.log((product.name));

	let product_link = product('a[class="product__linkcontainer js-catlisting-productlink-container no-transform"]');
	//console.log(product_link.attr('href'));
	let link = product_link.attr('href');
	if (link != undefined) {links.push(link);}


	}

	//console.log(links);
	console.log("Found "+links.length + " urls");

	var file = fs.createWriteStream('2_find_products/final_result.txt');
	file.on('error', function(err) { 
		console.log("couldn't store the data in a file."); });
	links.forEach(function(link) 
		{ 
			// Store the data in a file
			file.write(link + '\n'); 
		});
	file.end();
	console.log("Please check the 'final_result.txt' file");*/

  }
    )




  .catch(function (error) {
    // handle error
    console.log(error);
  })
