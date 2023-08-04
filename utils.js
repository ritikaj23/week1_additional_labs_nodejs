// Addition function 
const add = (num1, num2) => { return num1 + num2; } 
// Subtraction function 
const subtract = (num1, num2) => { return num1 - num2; } 
// Division function 
const divide = (num1, num2) => 
{ 
if (num2 === 0) { throw new Error("Cannot divide by zero"); 
}
 return num1 / num2;
 } 
// Find maximum number in an array
 const findMax = (numbers) => { 
if (numbers.length === 0) { 
throw new Error("Array is empty");
 } return Math.max(...numbers); 
} 
module.exports = { 
add,subtract,divide,findMax
 }; 
