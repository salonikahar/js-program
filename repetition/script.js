
function generateNumberList() {
    const numberInput = document.getElementById('numberInput');
    const numberList = document.getElementById('numberList');

    numberList.innerHTML = '';

    const limit = parseInt(numberInput.value);

    if (isNaN(limit) || limit <= 0) {
        alert('Please enter a valid positive number.');
        return;
    }

    for (let i = 1; i <= limit; i++) {
        const li = document.createElement('li');
        li.style.listStyle = 'none';
        li.style.margin='7px';
        li.style.paddingLeft='25px';
        li.style.paddingRight='25px';
        li.textContent = i; 
        numberList.appendChild(li); 
    }
}

document.getElementById('generateBtn').addEventListener('click', generateNumberList);