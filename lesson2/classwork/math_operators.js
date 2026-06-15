let num_str = "42";
let num_value = Number(num_str);  // Convert string to a number
console.log(num_value + 1);

let decimal_str = "3.14";
let decimal_value = Number(decimal_str)  // Also converts to a number
console.log(decimal_value + 2.19);

let num = 100;
let num_str2 = String(num);  // Convert number to a string
console.log(num_str2 + 5)
keep
Pinned

Max Ch
5:27 PM
console.log(4 + 5);  // Addition: adds two numbers
console.log(10 - 3);  // Subtraction: subtracts the second number from the first number
console.log(5 * 7);  // Multiplication: multiplies two numbers
console.log(15 / 2);  // Division: divides and gives a decimal result
console.log(Math.floor(15 / 2));  // Floor Division: divides and gives a whole number result
console.log(15 % 2);  // Modulus: gives the remainder
console.log(2 ** 3);  // Exponentiation: first number raised to the power of the second number

// You can combine numbers and math operators
// JavaScript follows the order of operations
console.log(2 + 3 * 4);    // prints 14 (3 * 4 = 12, then 2 + 12)
console.log((2 + 3) * 4);  // prints 20 (2 + 3 = 5, then 5 * 4)

let a = 8;
let b = 3;
console.log("a + b =", a + b);
console.log("a * b =", a * b);

let x = 12;
let y = 5;
console.log("Quotient:", Math.floor(x / y));
console.log("Remainder:", x % y);
keep