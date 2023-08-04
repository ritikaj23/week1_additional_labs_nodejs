const url = require('url'); 
const querystring = require('querystring'); 
const urlString = 'https://www.example.com/search?q=nodejs'; 
const parsedUrl = url.parse(urlString, true); 
console.log(parsedUrl.query.q); // Output: nodejs 
const queryString = 'q=nodejs&lang=en';
 const parsedQuery = querystring.parse(queryString); 
console.log(parsedQuery); // Output: { q: 'nodejs', lang: 'en' }