// Variables
let firstNumber = '';
let secondNumber = '';
let operator = '';
let display = document.getElementById('display');

// Function to update the display
function updateDisplay(value) {
  display.textContent = value;
}

// Function to handle number button clicks
function handleNumberClick(number) {
  if (operator === '') {
    firstNumber += number;
    updateDisplay(firstNumber);
  } else {
    secondNumber += number;
    updateDisplay(secondNumber);
  }
}

// Function to handle operator button clicks
function handleOperatorClick(op) {
  if (firstNumber === '') {
    // Do nothing if the first number is not entered yet
    return;
  }
  
  if (secondNumber !== '') {
    // If the second number is already entered, calculate the result
    calculateResult();
  }
  
  operator = op;
}

// Function to calculate the result
function calculateResult() {
  const num1 = parseFloat(firstNumber);
  const num2 = parseFloat(secondNumber);
  let result;
  
  // Perform the calculation based on the operator
  switch (operator) {
    case '➕':
      result = num1 + num2;
      break;
    case '➖':
      result = num1 - num2;
      break;
    case '✖️':
      result = num1 * num2;
      break;
    case '➗':
      result = num1 / num2;
      break;
    case '%':
      result = num1 % num2;
      break;
    default:
      return;
  }
  
  // Update the display with the result
  updateDisplay(result);
  
  // Reset the variables
  firstNumber = result.toString();
  secondNumber = '';
  operator = '';
}

// Function to handle clear button click
function handleClearClick() {
  firstNumber = '';
  secondNumber = '';
  operator = '';
  updateDisplay('');
}

// Attach event listeners to the buttons
const buttons = document.querySelectorAll('#calcbuttons button');

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    const value = this.textContent;
    
    if (!isNaN(parseFloat(value)) || value === '.') {
      // If the button clicked is a number or decimal point
      handleNumberClick(value);
    } else {
      // If the button clicked is an operator
      handleOperatorClick(value);
    }
  });
});

// Clear button event listener
document.getElementById('btnC').addEventListener('click', handleClearClick);

