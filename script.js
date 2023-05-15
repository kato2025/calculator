// Variables
let firstNumber = '';
let secondNumber = '';
let operator = '';
let result = null;
let display = document.getElementById('display');

// Function to update the display
function updateDisplay(value) {
  display.textContent = value;
}

// Function to handle number button clicks
function handleNumberClick(number) {
  if (result !== null) {
    // If a result exists, start a new calculation
    firstNumber = '';
    secondNumber = '';
    operator = '';
    result = null;
  }

  if (operator === '') {
    if (number === '.' && firstNumber.includes('.')) {
      // Check if the decimal point is already present in firstNumber
      return; // Skip adding the decimal point
    }
    firstNumber += number;
    updateDisplay(firstNumber);
  } else {
    if (number === '.' && secondNumber.includes('.')) {
      // Check if the decimal point is already present in secondNumber
      return; // Skip adding the decimal point
    }
    secondNumber += number;
    updateDisplay(secondNumber);
  }
}

// Function to handle backspace button click
function handleBackspaceClick() {
  if (result !== null) {
    // If a result exists, clear the display and reset the calculation
    handleClearClick();
  } else if (operator === '') {
    // If no operator is selected, remove the last character from the first number
    firstNumber = firstNumber.slice(0, -1);
    updateDisplay(firstNumber);
  } else {
    // If an operator is selected, remove the last character from the second number
    secondNumber = secondNumber.slice(0, -1);
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
    operate();
  }

  operator = op;
}

// Function to calculate the result
function operate() {
  const num1 = parseFloat(firstNumber);
  const num2 = parseFloat(secondNumber);

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

  // Round the result to 2 decimal places if it is a decimal
  if (Number.isFinite(result) && result % 1 !== 0) {
    result = result.toFixed(2);
  }

  // Update the display with the result
  updateDisplay(result);

  // Reset the variables
  firstNumber = '';
  secondNumber = '';
  operator = '';
}

// Function to handle clear button click
function handleClearClick() {
  firstNumber = '';
  secondNumber = '';
  operator = '';
  result = null;
  updateDisplay('');
}

// Attach event listeners to the buttons
// Attach event listeners to the buttons
const buttons = document.querySelectorAll('#calcbuttons button');

buttons.forEach(function (button) {
  const value = button.textContent;

  if (value === '⌫') {
    // If the button is backspace, attach the backspace click handler
    button.addEventListener('click', handleBackspaceClick);
  } else if (!isNaN(parseFloat(value)) || value === '.') {
    // If the button clicked is a number or decimal point
    button.addEventListener('click', function () {
      handleNumberClick(value);
    });
  } else {
    // If the button clicked is an operator
    button.addEventListener('click', function () {
      handleOperatorClick(value);
    });
  }
});

// Clear button event listener
document.getElementById('btnC').addEventListener('click', handleClearClick);



/*
// Variables
let firstNumber = '';
let secondNumber = '';
let operator = '';
let result = null;
let display = document.getElementById('display');

// Function to update the display
function updateDisplay(value) {
  display.textContent = value;
}

// Function to handle number button clicks
function handleNumberClick(number) {
  if (result !== null) {
    // If a result exists, start a new calculation
    firstNumber = '';
    secondNumber = '';
    operator = '';
    result = null;
  }

  if (operator === '') {
    if (number === '.' && firstNumber.includes('.')) {
      // Check if the decimal point is already present in firstNumber
      return; // Skip adding the decimal point
    }
    firstNumber += number;
    updateDisplay(firstNumber);
  } else {
    if (number === '.' && secondNumber.includes('.')) {
      // Check if the decimal point is already present in secondNumber
      return; // Skip adding the decimal point
    }
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
    operate();
  }

  operator = op;
}
// Function to calculate the result
function operate() {
  const num1 = parseFloat(firstNumber);
  const num2 = parseFloat(secondNumber);

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

  // Round the result to 2 decimal places if it is a decimal
  if (Number.isFinite(result) && result % 1 !== 0) {
    result = result.toFixed(2);
  }

  // Update the display with the result
  updateDisplay(result);

  // Reset the variables
  firstNumber = '';
  secondNumber = '';
  operator = '';
}


// Function to handle clear button click
function handleClearClick() {
  firstNumber = '';
  secondNumber = '';
  operator = '';
  result = null;
  updateDisplay('');
}

// Attach event listeners to the buttons
const buttons = document.querySelectorAll('#calcbuttons button');

buttons.forEach(function (button) {
  button.addEventListener('click', function () {
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
*/