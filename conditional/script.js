function checkEvenOrOdd() {
    var input = document.getElementById('numberInput').value;
    var messageDiv = document.getElementById('message');
    
    var number = 0;
    var isNegative = false;

    if (input.charAt(0) === '-') {
        isNegative = true;
        input = input.substring(1); 
    }

    for (var i = 0; i < input.length; i++) {
        number = number * 10 + (input.charCodeAt(i) - '0'.charCodeAt(0)); 
    }

    if (isNegative) {
        number = -number;
    }

    var remainder = number - ((number >> 1) << 1);

    if (remainder === 0) {
        messageDiv.innerHTML = number + " is an Even number.";
    } else {
        messageDiv.innerHTML = number + " is an Odd number.";
    }
}
