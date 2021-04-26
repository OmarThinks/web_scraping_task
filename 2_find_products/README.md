# 2) Find Products:


# Output:

There is a file called **`final_result.txt`**, all the urls 
of the products of the search query are there.



# How the code works:

1. Declare the search parameters
2. Transporm search parameters from human readable to the form that
the website will understand
3. Create the final url with query paramaters
4. Get a list of the products
5. for each product, get it's link
6. put all the links of the products in an array
7. **Store** the final result in a text file called 
	**`final_result.txt`**


# Dependencies:

1. **axios** (To send http requests)
2. **cheerio** (To prase the XML into js data types)
3. **fs** (To store the data in a text file)



# How to run the code:

<b>

```bash
npm run find_products
```
</b>

The result:

<b>

```bash
> scraping@1.0.0 find_products E:\...\phantom\endpoints
> node 2_find_products/index.js

q=custom&pmin=0&pmax=150.01&prefn1=bvAverageRating&prefv1=5|4&prefn2=a2000002&prefv2=Collectibles|Clothing|Accessories&prefn3=a1000201&prefv3=Backpack|Coats %26 Jackets|Key Chains|Limited Edition|Luggage|Pins&prefn4=a2000001&prefv4=Mickey and Friends|Toy Story|The Mandalorian|Up&
Found 18 urls
Please check the 'final_result.txt' file
```
</b>




# final_result.txt:

<b>

```
https://www.shopdisney.co.uk/disney-store-mickey-and-friends-chinese-new-year-2021-pin-466041784086.html
https://www.shopdisney.co.uk/disney-store-mickey-mouse-icon-rolling-luggage-427241661225.html
https://www.shopdisney.co.uk/disney-store-fantasia-hyacinth-hippo-and-alligators-pin-466041554306.html
https://www.shopdisney.co.uk/disney-store-grogu-the-child-bag-charm-star-wars-the-mandalorian-427271679306.html
.
.
.
```
</b>
