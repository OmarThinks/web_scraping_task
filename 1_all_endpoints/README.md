# 1) Website Endpoints:


# Output:

There is a file called **`final_result.txt`**, all the urls 
are there.



# How the code works:

1. **Send** an **http request** to the **sitemap** of the website,
which is located at this url: https://www.shopdisney.co.uk/sitemap_0.xml

2. Take the **response text**
3. **Parse** the **XML** in the response text
4. **Get** all the **urls** from the `urlset`
5. for each url **get the text of the `loc` tag**
6. **Store** the final result in a text file called 
	**`final_result.txt`**


# Dependencies:

1. **axios** (To send http requests)
2. **cheerio** (To prase the XML into js data types)
3. **fs** (To store the data in a text file)



# How to run the code:

<b>

```bash
npm run endpoints
```
</b>

The result:

<b>

```bash
> scraping@1.0.0 start E:../endpoints
> node 1_all_endpoints/index.js

Found 2786 urls
Please check the 'final_result.txt' file
```
</b>




# final_result.txt:

<b>

```
https://www.shopdisney.co.uk/on/demandware.store/Sites-disneyuk-Site/en_GB/Default-Start
https://www.shopdisney.co.uk/home-show
https://www.shopdisney.co.uk/bag-promos
https://www.shopdisney.co.uk/http//%7Bhost%7D/star-wars-party
https://www.shopdisney.co.uk/on/demandware.store/Sites-disneyuk-Site/en_GB/Search-ShowContent?fdid=Privacy%20Notice
https://www.shopdisney.co.uk/departments/valentines
https://www.shopdisney.co.uk/marvel/movies/marvels-avengers
https://www.shopdisney.co.uk/promotion-inclusions
.
.
.
```
</b>
