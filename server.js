const http = require('http'); 
const { add, subtract, divide, findMax } = require('./utils'); 
const server = http.createServer((req, res) => {
 const num1 = 10;
 const num2 = 5; 
const result1 = add(num1, num2); 
const result2 = subtract(num1, num2); 
const result3 = divide(num1, num2); 
const numbers = [2, 5, 8, 1, 9]; 
const result4 = findMax(numbers); 
const response = 
` Results: 
- Addition: ${result1}
 -Subtraction: ${result2} 
- Division: ${result3} 
- Maximum number: ${result4} `;
 res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end(response);
 });
const port = 3000;
server.listen(port, () => { console.log(`Server is running on port ${port}`);
});