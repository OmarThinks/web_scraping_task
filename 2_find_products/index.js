const axios = require('axios').default;
const cheerio = require("cheerio");
var fs = require('fs');

const URL = "https://www.shopdisney.co.uk/search";

const search_parameters = {
	"query":"custom", //q
	"minimum_price":"0", //pmin //Float
	"maximum_price":"150.01", //pmax //Float
	"ratings":"5|4",//bvAverageRating //List of ints
	"departments":"Collectibles|Clothing|Accessories",//a2000002
	"product_types":"Backpack|Coats %26 Jackets"+
		"|Key Chains|Limited Edition|Luggage|Pins",//a1000201
	"movies":"Mickey and Friends|Toy Story"+
		"|The Mandalorian|Up",//a2000001
	//"caracters":"Mickey Mouse|Mr Incredible|Mandalorian",//a1000001
	//"brands":"Disney Store|Disney Parks",//a1000801
	//"sizes":"XS|S|L",//size
	//"colors":"Multi-Colour",//a1000501
	//"genders":"Female",//a1000761 
	//"age_ranges":"Adults",//a1000771 
	//"isPersonalizable":"Personalisable",//Personalisable //Boolean
	//If not personalizable: leave empty
	//"discounts":"10%25 - 20%25|40%25 - 50%25",//discountPercent
}

/*
prefn1: prefrence name 1
prefv1: prefrence value 1

prefn2: prefrence name 2
prefv2: prefrence value 2

*/



function get_query_parameters(search_parameters)
{
	let fixed_parameters = 
	{		
		"query":"q",
		"minimum_price":"pmin",
		"maximum_price":"pmax"
	}
	let changing_parameters ={
		"ratings":"bvAverageRating",
		"departments":"a2000002",
		"product_types":"a1000201",
		"movies":"a2000001",
		"caracters":"a1000001",
		"brands":"a1000801",
		"sizes":"size",
		"colors":"a1000501",
		"genders":"a1000761",
		"age_ranges":"a1000771",
		"discounts":"discountPercent",
	}
	let query_parameters = "";
	for (const key in search_parameters) {
		if (key in fixed_parameters)
		{
			query_parameters = query_parameters+
			fixed_parameters[key]+'='+search_parameters[key]+
			'&';
		}
	}	
	let current_changing_property = 1;
	for (const key in search_parameters) {
		if (key in changing_parameters)
		{
			query_parameters = query_parameters+
			"prefn"+current_changing_property+"="+changing_parameters[key]+
			"&"+
			"prefv"+current_changing_property+"="+search_parameters[key]+
			"&";
			current_changing_property = current_changing_property+1;
		}
	}
	return query_parameters;
}




console.log(get_query_parameters(search_parameters));




axios.get(URL+"?"+get_query_parameters(search_parameters))
  .then(function (response) {
    let response_text = response.data;
    let $ = cheerio.load(response_text);
    
    let data = $('section[class="catlisting__product-grid'+
    	' js-catlisting-product-grid"] >div').children();
    
    let links = [];
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
	console.log("Please check the 'final_result.txt' file");

  }
    )




  .catch(function (error) {
    // handle error
    console.log(error);
  })
