// Problem 1
// Create a variable for your age.
// Calculate and print how many decades old you are, rounded down.
let age = 11;
console.log(Math.floor(age / 10));


// Problem 2
// Create a variable for a number.
// Print the result of multiplying that number by 5.
let number = 13.4;
console.log(number * 5);


// Problem 3
// Use a for loop to print "I will learn JavaScript!" 3 times.
for (let i = 0; i < 3; i++) {
    console.log("I will learn JavaScript!");
}


// Problem 4
// Create variables for your name and age.
// Print your name and how old you will be in one year in a single sentence.
let name = "Hana";
let age = 11;
console.log(`My name is ${name} and I will be ${age + 1} next year.`);


// Problem 5
// Use a for loop to print the numbers from 2 to 8, one per line.
for (let i = 2; i <= 8; i++) {
    console.log(i);
}

// Problem 6
// Create a variable for your age.
// Use Math.floor to calculate how many full 5-year periods old you are.
// Print a sentence saying:
// "You have lived through ___ full 5-year periods."
let age = 11;
console.log(`You have lived through ${Math.floor(age / 5)} full 5-year periods.`);



// Problem 7
// Create a variable for a number.
// Use a for loop to print that number multiplied by 1, 2, 3, 4, and 5.
// Example if the number is 6:
// 6
// 12
// 18
// 24
// 30
let number = 6;
for (let i = 1; i <= 5; i++) {
    console.log(number * i);
}



// Problem 8
// Create variables for your name and age.
// Use a for loop to print how old you will be for the next 5 years.
// Example:
// "Alex will be 14 years old in 1 year."
// "Alex will be 15 years old in 2 years."
// ...
let name = "Hana";
let age = 11;

for (let i = 1; i <= 5; i++) {
    console.log(`${name} will be ${age + i} years old in ${i} years.`);
}
keep
Pinned