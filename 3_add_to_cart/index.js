const axios = require('axios').default;
const cheerio = require("cheerio");
var fs = require('fs');
var querystring = require('querystring');

var https = require('https');

const URL = "https://www.shopdisney.co.uk/disney-store-x-men-duffle-bag-427241712880.html";

const add_to_cart_url = "https://www.shopdisney.co.uk/on/demandware.store/Sites-disneyuk-Site/en_GB/Cart-AddProduct";


function get_csrf_token($)
{
	let token_tag = $('input[name="csrf_token"]');
    let csrf = token_tag.attr('value');
    return csrf;
}


function get_product_id($)
{
	let product_id_tag = $('input[name="pid"]');
    let product_id = product_id_tag.attr('value');
    return product_id;
}





const amount = 5;




function send_the_request(csrf,product_id,amount)
{
	axios(
	{
	  method: "post",
	  url: add_to_cart_url,
	  data: querystring.stringify({
		"format":"ajax",
		"Quantity":amount,
		"pid":product_id.toString(),
		"csrf_token":csrf
		}),
	  headers: { "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" },
	})
	.then((res=>{console.log(res)}))
}


axios.get(URL)
  .then(function (response) {
    let response_text = response.data;
    //console.log(response_text);
    let $ = cheerio.load(response_text);
    
    let csrf = get_csrf_token($);
    //console.log(csrf);
    let product_id = get_product_id($);
    //console.log(csrf);
    return [csrf,product_id];
  }
    )
  .then(function(data)
  {
  	let csrf = data[0];
  	let product_id = data[1];
 	send_the_request(csrf,product_id,amount);  		
  }
  	)

  .catch(function (error) {
    // handle error
    console.log(error);
  })
