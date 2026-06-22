// Problem 1
// Create a variable for a number.
// Print whether the number is positive, negative, or zero.


let num = 15;
if (num > 0) {
    console.log("Positive");
} else if (num < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

// Problem 2
// Create a variable for a number.
// Print whether it is even or odd.
let num = 15;
if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}



// Problem 3
// Create variables for age and has_permission.
// Print "Can go" if age is at least 12 or has_permission is true.
// Otherwise print "Cannot go".
let age = 12;
let has_permission = false;
if (age >= 12 || has_permission) {
    console.log("Can go");
} else {
    console.log("Cannot go");
}


// Problem 4
// Create a variable for a number.
// Print whether it is divisible by 2 and 3.
let num = 12;
if (num % 2 === 0 && num % 3 === 0) {
    console.log("Divisible by 2 and 3");
} else {
    console.log("Not divisible by both 2 and 3");
}


// Problem 5
// Create a variable for a temperature.
// Print "Cold" if below 50, "Warm" if 50-79, and "Hot" if 80 or above.
let temperature = 85;
if (temperature < 50) {
    console.log("Cold");
} else if (temperature >= 50 && temperature <= 79) {
    console.log("Warm");
} else {
    console.log("Hot");
}
