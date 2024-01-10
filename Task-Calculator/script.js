const display = document.getElementById('result');
let isValidExpression = true;

function appendCharacter(character) {
    display.value += character;
}

function clearDisplay() {
    display.value = '';
}

function deleteLastCharacter() {
    display.value = display.value.slice(0, -1);
}

function evaluateExpression() {
    const expression = display.value;
    if (isValidExpression) {
        try {
            display.value = eval(expression);
        } catch (error) {
            alert("Invalid expression!");
        }
    } else {
        alert("Invalid expression!");
    }
    isValidExpression = true;
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (
        !isNaN(key) ||
        key === '.' ||
        key === 'Backspace' ||
        key === '/' ||
        key === '*' ||
        key === '+' ||
        key === '-' ||
        key === 'Enter'
    ) {
        if (key === 'Enter') {
            evaluateExpression();
            event.preventDefault(); // Prevent the default Enter key behavior
        } else if (key === 'Backspace') {
            deleteLastCharacter();
        } else {
            appendCharacter(key);
        }
    } else {
        alert('Please enter valid numeric keys or operators!');
        isValidExpression = false;
    }
});