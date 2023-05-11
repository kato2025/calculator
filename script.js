// Variables
const calculator = document.getElementById("calculator");
const calcInterface = document.getElementById("calcinterface");
const calcDisplay = document.getElementById("display");
const calcButtons = document.getElementById("calcbuttons");
let cleared = false; // Added variable to track if display is cleared

// Functions
function clear() {
  calcDisplay.textContent = "";
  cleared = true; // Set cleared to true when display is cleared
}

function backspace() {
  const text = calcDisplay.textContent;
  if (text.length > 0) {
    calcDisplay.textContent = text.slice(0, -1);
  }
}

function operate() {
  const expression = calcDisplay.textContent;
  try {
    const result = Function(`"use strict"; return (${expression});`)();
    const roundedResult = Math.round(result * 10) / 10; // Round result to 1 decimal place
    calcDisplay.textContent = roundedResult;
    cleared = true; // Set cleared to true after displaying the result
  } catch (error) {
    calcDisplay.textContent = "Error";
  }
}

// Event listeners
calcButtons.addEventListener("click", (event) => {
  const button = event.target;
  const text = button.textContent;
  const operators = ["+", "-", "*", "/", "%", "🟰"];
  if (operators.includes(text) && text !== "-") {
    if (calcDisplay.textContent.length === 0) {
      return;
    }
    const lastCharacter = calcDisplay.textContent[calcDisplay.textContent.length - 1];
    if (isNaN(lastCharacter)) {
      return;
    }
  }
  if (cleared && !isNaN(text)) {
    clear(); // Clear display if a number is pressed after results are displayed
  }
  cleared = false; // Reset cleared to false
  switch (text) {
    case "C":
      clear();
      break;
    case "⌫":
      backspace();
      break;
    case "🟰":
      operate();
      break;
    default:
      calcDisplay.textContent += text;
      break;
  }
});
