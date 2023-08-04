const util = require('util'); 
const fs = require('fs'); 
const readFilePromise = util.promisify(fs.readFile); 
readFilePromise('file.txt', 'utf8')
 .then(data => console.log(data)) 
.catch(err => console.error(err));