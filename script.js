




























































// =============================================
// Simple JavaScript Script Template
// Author: Your Name
// GitHub: https://github.com/yourusername
// =============================================

/**
 * A simple utility script with useful functions
 */

// Main function
function greetUser(name = "Guest") {
    console.log(`Hello, ${name}! 👋 Welcome to this simple JS script.`);
}

// Calculate sum of numbers
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

// Get current date in a nice format
function getCurrentDate() {
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return new Date().toLocaleDateString('en-US', options);
}

// Example usage
console.log("=== Simple JS Script Started ===\n");

greetUser("Meagan");

console.log(`Today is: ${getCurrentDate()}`);
console.log(`Sum of 10 + 20 + 30 = ${sum(10, 20, 30)}`);
console.log(`Sum of 5 numbers: ${sum(1, 2, 3, 4, 5)}`);

// Bonus: Simple counter
let counter = 0;
function increment() {
    counter++;
    console.log(`Counter: ${counter}`);
}

// Run increment a few times
increment();
increment();
increment();

console.log("\n=== Script finished successfully! ===");
