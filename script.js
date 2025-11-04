//your JS code here. If required.
// Write your code here
let output = '';

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        output += 'FizzBuzz';
    } else if (i % 3 === 0) {
        output += 'Fizz';
    } else if (i % 5 === 0) {
        output += 'Buzz';
    } else {
        output += i.toString();
    }
    
    // Add newline after each number/word except the last one
    if (i < 20) {
        output += '\n';
    }
}

// Display the final output in a single alert
alert(output);