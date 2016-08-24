Andrew Cordivari

github.com/andrewdc92

This was a lot of fun. I enjoyed the fact that the end goal was very tangible (mentally, when envisioning the end goal). I think at the end, I had a conflict between referencing the general search api query and the specific api query that loaded the trending ones at the outset. I initially had the search bar working, but couldn't append the images, and when I used the trending endpoint code my search bar stopped working! Probably because the variable reference in my function was messed up, but I couldn't spot it. So I kind of hacked it by changing the value on pg 1 so it loads the trending that way, and the search bar works as well. I will ask one of you for some clarification on what was cuasing the overriding command tomorrow. 







Your site should look something like:

![desktop layout](https://cloud.githubusercontent.com/assets/3010270/13936044/2ffadf60-ef78-11e5-95c5-55b8aefe68d6.png)

Solution in the [`solution` branch](https://github.com/sf-wdi-31/giffaw/tree/solution). Load More button solution in the [`solution-more` branch](https://github.com/sf-wdi-31/giffaw/tree/solution-more). You can also look at these branches locally by committing your work and then entering the following in the terminal:

```
	git checkout solution
```

To go back to your work,

```
	git checkout master
```

## Introduction

You're about to write a lot of AJAX-backed JavaScript using jQuery that will complete our little Gif app.

Make use of the fantastic Giphy api:
http://api.giphy.com/

Check out the documentation here:
https://github.com/Giphy/GiphyAPI

#### Thinking Like An Engineer

As we get into more complicated problems, we need to start thinking more and more like engineers. Engineers break down large problems into the smallest possible parts, and tackle each small part one at a time.

This is one of the major skills for web development!

Here's some steps to follow to help get you in this mindset:

1. Familiarize yourself with the [docs](https://github.com/Giphy/GiphyAPI)
	- Specifically, we will be using the [search endpoint](https://github.com/Giphy/GiphyAPI#search-endpoint)
		- Also note the ever-important API Key situation (We will be using the [Public Beta API key](https://github.com/Giphy/GiphyAPI#public-beta-key))

2. Test the API out in your browser!
	- Go to http://api.giphy.com/v1/gifs/search?q=cats&api_key=dc6zaTOxFJmzC. This is the API request for the search term `cats`.
	- What do you see? It's a JSON Object! If you have the JSONView Chrome plugin the JSON should look pretty. If you don't have it yet, download it [here](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc).

3. Clone this project. We first want to write jQuery that returns and `console.log()`s that same object we saw when we opened the API in our browser. BUT HOW DO I USE AJAX!!??
	- Look at this example of an `$.ajax` request:
	```js
	$.ajax({

		// What kind of request
		method: "GET",

		// The URL for the request
		url: "http://api.api.com/search",

		// The data to send aka query parameters
		data: $("form").serialize(),

		// Code to run if the request succeeds;
		// the response is passed to the function
		success: onSuccess,

		// Code to run if the request fails; the raw request and
		// status codes are passed to the function
		error: onError
	});

	function onSuccess(json) {
		$("div").append("<h1>"+json.title+"</h1>");
	}

	function onError(xhr, status, errorThrown) {
		alert("Sorry, there was a problem!");
		console.log("Error: " + errorThrown);
		console.log("Status: " + status);
		console.dir(xhr);
	}
	```
	- How would you repurpose this to GET the data you want from the URL you want.
		- What is your base API url? What are the query parameters?
		- HINT: you need to `serialize()` your form data.

4. Start playing in your scripts/app.js file.
	- Your first step is to make an AJAX call fire when your page loads. Don't try to do everything at once! You want to make a request to [the trending gifs endpoint of the Giphy API](https://github.com/Giphy/GiphyAPI#trending-gifs-endpoint). First try to log the data to the console. Then work on logging specific data you want. What do you need to get the gifs to actually load on the page? There is a bunch of stuff in this data object and you need to figure out what you need.
	- Once you narrowed that down, THEN you want to build functions that a) generate HTML strings and b) `append()`s the HTML strings to the page.
	- First log those strings to the console, and make sure they look like you think they should. THEN append them into the DOM!

5. Get the input box to make a different AJAX call to the search URL.
	- Create an event listener that does something simple (ie `console.log()` the search term) when the search form is submitted.
	- Does a search box button have a default action? What do we want do with that?
	- Make that listener fire an AJAX call to the [search endpoint of the Giphy API](https://github.com/Giphy/GiphyAPI#search-endpoint).
	- Ensure that the AJAX call is working by `console.log()`ing the returned JSON.
	- Now, use your functions that a) generate HTML strings and b) appends them to the page.
	- Are we just appending more and more gifs to the DOM? Do we need to clear previous gifs before loading more?

6. Can you complete the super bonus? Add a `Load More` button that, when clicked, appends 25 more gifs to the bottom of the page.
	- You will need to make use of the `offset` query parameter. See [Search Endpoint](https://github.com/Giphy/GiphyAPI#search-endpoint) section for more information.

## Additional Resources

- [jQuery AJAX Docs](http://api.jquery.com/jquery.ajax/)
- [http://youmightnotneedjquery.com](http://youmightnotneedjquery.com/)
- [Some useful jQuery DOM Manipulation Docs](http://api.jquery.com/prepend/)
