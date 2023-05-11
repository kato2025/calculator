// Get the calculator interface elements
const calcInterface = document.getElementById("calcinterface");
const calcEntries = document.getElementById("calcentries");
const calcButtons = document.getElementById("calcbuttons");
const btnEqual = document.getElementById("btnequal");

let currentExpression = ""; // Store the current expression

// Add click event listener to the calculator buttons
calcButtons.addEventListener("click", function(event) {
  const target = event.target;
  
  // Check if the clicked element is a button
  if (target.tagName === "BUTTON") {
    const buttonValue = target.textContent;
    
    // Perform different actions based on the button value
    switch (buttonValue) {
      case "C":
        // Clear the calculator entries
        calcEntries.textContent = "";
        currentExpression = "";
        break;
      case "⌫":
        // Remove the last character from the entries
        calcEntries.textContent = calcEntries.textContent.slice(0, -1);
        currentExpression = currentExpression.slice(0, -1);
        break;
      case "🟰":
        // Evaluate the entries and display the result
        try {
          const result = calculateResult(currentExpression);
          calcEntries.textContent = result;
          currentExpression = result.toString();
        } catch (error) {
          calcEntries.textContent = "Error";
        }
        break;
      default:
        // Append the button value to the entries
        calcEntries.textContent += buttonValue;
        currentExpression += buttonValue;
        break;
    }
  }
});

// Function to calculate the result
function calculateResult(expression) {
  const operators = ["+", "-", "*", "/", "%"];
  let num1 = "";
  let operator = "";
  let num2 = "";
  
  // Extract the numbers and operator from the expression
  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];
    if (operators.includes(char)) {
      operator = char;
    } else {
      if (operator === "") {
        num1 += char;
      } else {
        num2 += char;
      }
    }
  }
  
  // Convert the numbers to numeric values
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  
  // Perform the calculation based on the operator
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    case "%":
      return num1 % num2;
    default:
      throw new Error("Invalid operator");
  }
}

// Prevent form submission when pressing Enter
calcInterface.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
  }
});

// Prevent right-clicking on the calculator interface
calcInterface.addEventListener("contextmenu", function(event) {
    event.preventDefault();
});


/*
btnequal.addEventListener('click', () => {
    const firstNumber = prompt("Enter First Number");
    const mathOperator = prompt("Enter Math Operator");
    const secondNumber = prompt("Enter Second Number");
    let answer = 0;

    function operate(firstNumber, mathOperator, secondNumber) {
        if (mathOperator === "+") {
            answer = Number(firstNumber) + Number(secondNumber);
            alert(answer);
        } else if (mathOperator === "-") {
            answer = Number(firstNumber) - Number(secondNumber);
            alert(answer);
        } else if (mathOperator === "*") {
            answer = Number(firstNumber) * Number(secondNumber);
            alert(answer);
        } else if (mathOperator === "/") {
            answer = Number(firstNumber) / Number(secondNumber);
            alert(answer);
        } else if (mathOperator === "%") {
            answer = Number(firstNumber) % Number(secondNumber);
            alert(answer);
        } else {
            alert("Wrong math Operator");
        }
    }
    operate(firstNumber, mathOperator, secondNumber);
});
*/