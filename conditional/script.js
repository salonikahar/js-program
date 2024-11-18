function checkEvenOrOdd() {
    var input = document.getElementById('numberInput').value; // Get user input
    var messageDiv = document.getElementById('message');
    
    // Convert input to a number without using built-in functions
    var number = 0;
    var isNegative = false;

    // Check if the input is negative
    if (input.charAt(0) === '-') {
        isNegative = true; // Mark as negative
        input = input.substring(1); // Remove the negative sign for processing
    }

    // Convert string to number manually
    for (var i = 0; i < input.length; i++) {
        number = number * 10 + (input.charCodeAt(i) - '0'.charCodeAt(0)); // Convert character to digit
    }

    if (isNegative) {
        number = -number; // Restore the negative sign if needed
    }

    // Check if the number is even or odd using modulo logic
    var remainder = number - ((number >> 1) << 1); // Calculate remainder without using %
    
    // Conditional statements to provide feedback
    if (remainder === 0) {
        messageDiv.innerHTML = number + " is an Even number.";
    } else {
        messageDiv.innerHTML = number + " is an Odd number.";
    }
}