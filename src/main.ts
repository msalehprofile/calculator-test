// screen query selector

const display = document.querySelector<HTMLHeadingElement>("#app__screen");

// number query selectors
const selectOne = document.querySelector<HTMLButtonElement>("#app__one");
const selectTwo = document.querySelector<HTMLButtonElement>("#app__two");
const selectThree = document.querySelector<HTMLButtonElement>("#app__three");
const selectFour = document.querySelector<HTMLButtonElement>("#app__four");
const selectFive = document.querySelector<HTMLButtonElement>("#app__five");
const selectSix = document.querySelector<HTMLButtonElement>("#app__six");
const selectSeven = document.querySelector<HTMLButtonElement>("#app__seven");
const selectEight = document.querySelector<HTMLButtonElement>("#app__eight");
const selectNine = document.querySelector<HTMLButtonElement>("#app__nine");
const selectZero = document.querySelector<HTMLButtonElement>("#app__zero");
const selectClear = document.querySelector<HTMLButtonElement>("#app__clear");

// symbols query selectors
const selectPlusMinus =
  document.querySelector<HTMLButtonElement>("#app__plus-minus");
const selectpercentage =
  document.querySelector<HTMLButtonElement>("#app__percentage");
const selectDivide = document.querySelector<HTMLButtonElement>("#app__divide");
const selectMultiply =
  document.querySelector<HTMLButtonElement>("#app__multiply");
const selectAdd = document.querySelector<HTMLButtonElement>("#app__plus");
const selectSubtract =
  document.querySelector<HTMLButtonElement>("#app__subtract");
const selectEquals = document.querySelector<HTMLButtonElement>("#app__equals");
const selectDecimal =
  document.querySelector<HTMLButtonElement>("#app__decimal");
// issue with numbers & display
if (
  !selectOne ||
  !selectTwo ||
  !selectThree ||
  !selectFour ||
  !selectFive ||
  !selectSix ||
  !selectSeven ||
  !selectEight ||
  !selectNine ||
  !display ||
  !selectClear ||
  !selectZero
) {
  throw new Error("issue with selectors");
}

// symbols error finder

if (
  !selectMultiply ||
  !selectDivide ||
  !selectAdd ||
  !selectSubtract ||
  !selectpercentage ||
  !selectPlusMinus ||
  !selectEquals ||
  !selectDecimal
) {
  throw new Error("issue with selectors");
}

//functions to handle numbers on screen
const handleNine = (event: Event) => {
  // if the first number is 0 then replace with selected number
  if (display.innerText === "0") {
    display.innerText = "9";
  } // if the last three characters are a symbol and a zero, replace the zero with a number
  else if (
    display.innerText.slice(-3) === "+ 0" ||
    display.innerText.slice(-3) === "- 0" ||
    display.innerText.slice(-3) === "/ 0" ||
    display.innerText.slice(-3) === "x 0"
  ) {
    let oneAfterZero = display.innerText.split(" ");
    let firstNumber = oneAfterZero[0];
    let symbol = oneAfterZero[1];
    let secondNumber = 9;
    display.innerText = firstNumber + " " + symbol + " " + secondNumber;
  } // if there is a symbol last, add a space and the selected number, if not just add the number to the end
  else if (
    display.innerText.charAt(display.innerText.length - 1) === "+" ||
    display.innerText.charAt(display.innerText.length - 1) === "-" ||
    display.innerText.charAt(display.innerText.length - 1) === "x" ||
    display.innerText.charAt(display.innerText.length - 1) === "/"
  ) {
    display.innerText = display.innerText + " 9";
  } else {
    display.innerText = display.innerText + "9";
  }
};

const handleEight = (event: Event) => {
  // if the first number is 0 then replace with selected number
  if (display.innerText === "0") {
    display.innerText = "8";
  } // if the last three characters are a symbol and a zero, replace the zero with a number
  else if (
    display.innerText.slice(-3) === "+ 0" ||
    display.innerText.slice(-3) === "- 0" ||
    display.innerText.slice(-3) === "/ 0" ||
    display.innerText.slice(-3) === "x 0"
  ) {
    let oneAfterZero = display.innerText.split(" ");
    console.log(oneAfterZero);
    let firstNumber = oneAfterZero[0];
    let symbol = oneAfterZero[1];
    let secondNumber = 8;
    display.innerText = firstNumber + " " + symbol + " " + secondNumber;
  } // if there is a symbol last, add a space and the selected number, if not just add the number to the end
  else if (
    display.innerText.charAt(display.innerText.length - 1) === "+" ||
    display.innerText.charAt(display.innerText.length - 1) === "-" ||
    display.innerText.charAt(display.innerText.length - 1) === "x" ||
    display.innerText.charAt(display.innerText.length - 1) === "/"
  ) {
    display.innerText = display.innerText + " 8";
  } else {
    display.innerText = display.innerText + "8";
  }
};

const handleSeven = (event: Event) => {
  // if the first number is 0 then replace with selected number
  if (display.innerText === "0") {
    display.innerText = "7";
  } // if the last three characters are a symbol and a zero, replace the zero with a number
  else if (
    display.innerText.slice(-3) === "+ 0" ||
    display.innerText.slice(-3) === "- 0" ||
    display.innerText.slice(-3) === "/ 0" ||
    display.innerText.slice(-3) === "x 0"
  ) {
    let oneAfterZero = display.innerText.split(" ");
    console.log(oneAfterZero);
    let firstNumber = oneAfterZero[0];
    let symbol = oneAfterZero[1];
    let secondNumber = 7;
    display.innerText = firstNumber + " " + symbol + " " + secondNumber;
  } // if there is a symbol last, add a space and the selected number, if not just add the number to the end
  else if (
    display.innerText.charAt(display.innerText.length - 1) === "+" ||
    display.innerText.charAt(display.innerText.length - 1) === "-" ||
    display.innerText.charAt(display.innerText.length - 1) === "x" ||
    display.innerText.charAt(display.innerText.length - 1) === "/"
  ) {
    display.innerText = display.innerText + " 7";
  } else {
    display.innerText = display.innerText + "7";
  }
};

const handleSix = (event: Event) => {
  // if the first number is 0 then replace with selected number
  if (display.innerText === "0") {
    display.innerText = "6";
  } // if the last three characters are a symbol and a zero, replace the zero with a number
  else if (
    display.innerText.slice(-3) === "+ 0" ||
    display.innerText.slice(-3) === "- 0" ||
    display.innerText.slice(-3) === "/ 0" ||
    display.innerText.slice(-3) === "x 0"
  ) {
    let oneAfterZero = display.innerText.split(" ");
    console.log(oneAfterZero);
    let firstNumber = oneAfterZero[0];
    let symbol = oneAfterZero[1];
    let secondNumber = 6;
    display.innerText = firstNumber + " " + symbol + " " + secondNumber;
  } // if there is a symbol last, add a space and the selected number, if not just add the number to the end
  else if (
    display.innerText.charAt(display.innerText.length - 1) === "+" ||
    display.innerText.charAt(display.innerText.length - 1) === "-" ||
    display.innerText.charAt(display.innerText.length - 1) === "x" ||
    display.innerText.charAt(display.innerText.length - 1) === "/"
  ) {
    display.innerText = display.innerText + " 6";
  } else {
    display.innerText = display.innerText + "6";
  }
};

const handleFive = (event: Event) => {
  // if the first number is 0 then replace with selected number
  if (display.innerText === "0") {
    display.innerText = "5";
  } // if the last three characters are a symbol and a zero, replace the zero with a number
  else if (
    display.innerText.slice(-3) === "+ 0" ||
    display.innerText.slice(-3) === "- 0" ||
    display.innerText.slice(-3) === "/ 0" ||
    display.innerText.slice(-3) === "x 0"
  ) {
    let oneAfterZero = display.innerText.split(" ");
    console.log(oneAfterZero);
    let firstNumber = oneAfterZero[0];
    let symbol = oneAfterZero[1];
    let secondNumber = 5;
    display.innerText = firstNumber + " " + symbol + " " + secondNumber;
  } // if there is a symbol last, add a space and the selected number, if not just add the number to the end
  else if (
    display.innerText.charAt(display.innerText.length - 1) === "+" ||
    display.innerText.charAt(display.innerText.length - 1) === "-" ||
    display.innerText.charAt(display.innerText.length - 1) === "x" ||
    display.innerText.charAt(display.innerText.length - 1) === "/"
  ) {
    display.innerText = display.innerText + " 5";
  } else {
    display.innerText = display.innerText + "5";
  }
};

const handleFour = (event: Event) => {
  // if the first number is 0 then replace with selected number
  if (display.innerText === "0") {
    display.innerText = "4";
  } // if the last three characters are a symbol and a zero, replace the zero with a number
  else if (
    display.innerText.slice(-3) === "+ 0" ||
    display.innerText.slice(-3) === "- 0" ||
    display.innerText.slice(-3) === "/ 0" ||
    display.innerText.slice(-3) === "x 0"
  ) {
    let oneAfterZero = display.innerText.split(" ");
    console.log(oneAfterZero);
    let firstNumber = oneAfterZero[0];
    let symbol = oneAfterZero[1];
    let secondNumber = 4;
    display.innerText = firstNumber + " " + symbol + " " + secondNumber;
  } // if there is a symbol last, add a space and the selected number, if not just add the number to the end
  else if (
    display.innerText.charAt(display.innerText.length - 1) === "+" ||
    display.innerText.charAt(display.innerText.length - 1) === "-" ||
    display.innerText.charAt(display.innerText.length - 1) === "x" ||
    display.innerText.charAt(display.innerText.length - 1) === "/"
  ) {
    display.innerText = display.innerText + " 4";
  } else {
    display.innerText = display.innerText + "4";
  }
};

const handleThree = (event: Event) => {
  // if the first number is 0 then replace with selected number
  if (display.innerText === "0") {
    display.innerText = "3";
  } // if the last three characters are a symbol and a zero, replace the zero with a number
  else if (
    display.innerText.slice(-3) === "+ 0" ||
    display.innerText.slice(-3) === "- 0" ||
    display.innerText.slice(-3) === "/ 0" ||
    display.innerText.slice(-3) === "x 0"
  ) {
    let oneAfterZero = display.innerText.split(" ");
    console.log(oneAfterZero);
    let firstNumber = oneAfterZero[0];
    let symbol = oneAfterZero[1];
    let secondNumber = 3;
    display.innerText = firstNumber + " " + symbol + " " + secondNumber;
  } // if there is a symbol last, add a space and the selected number, if not just add the number to the end
  else if (
    display.innerText.charAt(display.innerText.length - 1) === "+" ||
    display.innerText.charAt(display.innerText.length - 1) === "-" ||
    display.innerText.charAt(display.innerText.length - 1) === "x" ||
    display.innerText.charAt(display.innerText.length - 1) === "/"
  ) {
    display.innerText = display.innerText + " 3";
  } else {
    display.innerText = display.innerText + "3";
  }
};

const handleTwo = (event: Event) => {
  // if the first number is 0 then replace with selected number
  if (display.innerText === "0") {
    display.innerText = "2";
  } // if the last three characters are a symbol and a zero, replace the zero with a number
  else if (
    display.innerText.slice(-3) === "+ 0" ||
    display.innerText.slice(-3) === "- 0" ||
    display.innerText.slice(-3) === "/ 0" ||
    display.innerText.slice(-3) === "x 0"
  ) {
    let oneAfterZero = display.innerText.split(" ");
    console.log(oneAfterZero);
    let firstNumber = oneAfterZero[0];
    let symbol = oneAfterZero[1];
    let secondNumber = 2;
    display.innerText = firstNumber + " " + symbol + " " + secondNumber;
  } // if there is a symbol last, add a space and the selected number, if not just add the number to the end
  else if (
    display.innerText.charAt(display.innerText.length - 1) === "+" ||
    display.innerText.charAt(display.innerText.length - 1) === "-" ||
    display.innerText.charAt(display.innerText.length - 1) === "x" ||
    display.innerText.charAt(display.innerText.length - 1) === "/"
  ) {
    display.innerText = display.innerText + " 2";
  } else {
    display.innerText = display.innerText + "2";
  }
};

const handleOne = (event: Event) => {
  // if the first number is 0 then replace with selected number
  if (display.innerText === "0") {
    display.innerText = "1";
  } // if the last three characters are a symbol and a zero, replace the zero with a number
  else if (
    display.innerText.slice(-3) === "+ 0" ||
    display.innerText.slice(-3) === "- 0" ||
    display.innerText.slice(-3) === "/ 0" ||
    display.innerText.slice(-3) === "x 0"
  ) {
    let oneAfterZero = display.innerText.split(" ");
    console.log(oneAfterZero);
    let firstNumber = oneAfterZero[0];
    let symbol = oneAfterZero[1];
    let secondNumber = 1;
    display.innerText = firstNumber + " " + symbol + " " + secondNumber;
  } /// if there is a symbol last, add a space and the selected number, if not just add the number to the end
  else if (
    display.innerText.charAt(display.innerText.length - 1) === "+" ||
    display.innerText.charAt(display.innerText.length - 1) === "-" ||
    display.innerText.charAt(display.innerText.length - 1) === "x" ||
    display.innerText.charAt(display.innerText.length - 1) === "/"
  ) {
    display.innerText = display.innerText + " 1";
  } else {
    display.innerText = display.innerText + "1";
  }
};

const handleZero = (event: Event) => {
  // if the first number is 0 then keep it 0
  if (display.innerText === "0") {
    display.innerText = display.innerText;
  } // if there is a symbol last, add a space and the selected number, if not just add the number to the end
  else if (
    display.innerText.charAt(display.innerText.length - 1) === "+" ||
    display.innerText.charAt(display.innerText.length - 1) === "-" ||
    display.innerText.charAt(display.innerText.length - 1) === "x" ||
    display.innerText.charAt(display.innerText.length - 1) === "/"
  ) {
    display.innerText = display.innerText + " 0";
  } else {
    display.innerText = display.innerText + "0";
  }
};

//functions to handle symbols on screen. Making sure they can't be repeated

const handleClear = (event: Event) => {
  display.innerText = "0";
};

const handleMultiply = (event: Event) => {
  if (display.innerText === "") {
    display.innerText = " ";
  } else if (display.innerText.charAt(display.innerText.length - 1) === "x") {
    display.innerText;
  } else {
    display.innerText = display.innerText + " x";
  }
};

const handleDivide = (event: Event) => {
  if (display.innerText === "") {
    display.innerText = " ";
  } else if (display.innerText.charAt(display.innerText.length - 1) === "/") {
    display.innerText;
  } else {
    display.innerText = display.innerText + " /";
  }
};

const handlesubtract = (event: Event) => {
  if (display.innerText === "") {
    display.innerText = " ";
  } else if (display.innerText.charAt(display.innerText.length - 1) === "-") {
    display.innerText;
  } else {
    display.innerText = display.innerText + " -";
  }
};

const handleAdd = (event: Event) => {
  if (display.innerText === "") {
    display.innerText = " ";
  } else if (display.innerText.charAt(display.innerText.length - 1) === "+") {
    display.innerText;
  } else {
    display.innerText = display.innerText + " +";
  }
};

const handlePlusMinus = (event: Event) => {
  // splits the string into an array
  let splitEquation: string[] = display.innerText.split(" ");
  let firstNumber: string = splitEquation[0];
  let symbol: string = splitEquation[1];
  let secondNumber: string = splitEquation[2];
  //if just a zero is on screen, don't change display
  if (display.innerText === "0") {
    display.innerText = "0";
    // if there is no symbol and the first number is positive, change it to be negative 
  } else if (firstNumber.charAt(0) !== "-" && (display.innerText.includes("+") === false)) {
    display.innerText = `-${firstNumber}`
    // if there is no symbol and the first number is negative, change it to be positive
  } else if (firstNumber.charAt(0) === "-" && (display.innerText.includes("+") === false)) {
    display.innerText = `${firstNumber.slice(1)}`
    // if there is a symbol, and the first number is positive, keep it positive. If the second number is positive, change it to be negative 
  } else if (firstNumber.charAt(0) !== "-" && secondNumber.charAt(0) !== "-" && display.innerText.includes("+")) {
    display.innerText = `${firstNumber} ${symbol} -${secondNumber}`
    // if there is a symbol, and the first number is positive, keep it positive. If the second number is negative, change it to be positive
  } else if (firstNumber.charAt(0) !== "-" && secondNumber.charAt(0) === "-" && display.innerText.includes("+")) {
    display.innerText = `${firstNumber} ${symbol} ${secondNumber.slice(1)}`
    // if there is a symbol, and the first number is negative, keep it negative. If the second number is positive, change it to be negative 
  } else if (firstNumber.charAt(0) === "-" && secondNumber.charAt(0) !== "-" && display.innerText.includes("+")) {
    display.innerText = `${firstNumber} ${symbol} -${secondNumber}`
  } // if there is a symbol, and the first number is negative, keep it negative. If the second number is negative, change it to be positive
    else if (firstNumber.charAt(0) === "-" && secondNumber.charAt(0) === "-" && display.innerText.includes("+")) {
    display.innerText = `${firstNumber} ${symbol} ${secondNumber.slice(1)}`
  }
};

const handleDecimal = (event: Event) => {
  if (display.innerText === "") {
    display.innerText = " 0.";
  } else if (
    display.innerText.charAt(display.innerText.length - 1) === "+" ||
    display.innerText.charAt(display.innerText.length - 1) === "-" ||
    display.innerText.charAt(display.innerText.length - 1) === "x" ||
    display.innerText.charAt(display.innerText.length - 1) === "/"
  ) {
    display.innerText = display.innerText + " 0.";
  } else {
    display.innerText = display.innerText + ".";
  }
};

//creating an array
const handleEquals = (event: Event) => {
  let finalEquation: string = display.innerText;
  finalEquation = finalEquation.split(" ");
  console.log(finalEquation);

  // maths for simple equations
  if (finalEquation[1] === "+") {
    display.innerText = (Number(finalEquation[0]) +
      Number(finalEquation[2])) as number;
  } else if (finalEquation[1] === "x") {
    display.innerText = (Number(finalEquation[0]) *
      Number(finalEquation[2])) as number;
  } else if (finalEquation[1] === "/") {
    display.innerText = (Number(finalEquation[0]) /
      Number(finalEquation[2])) as number;
  } else if (finalEquation[1] === "-") {
    display.innerText = (Number(finalEquation[0]) -
      Number(finalEquation[2])) as number;
  }
};

// event listeners
selectNine.addEventListener("click", handleNine);
selectEight.addEventListener("click", handleEight);
selectSeven.addEventListener("click", handleSeven);
selectSix.addEventListener("click", handleSix);
selectFive.addEventListener("click", handleFive);
selectFour.addEventListener("click", handleFour);
selectThree.addEventListener("click", handleThree);
selectTwo.addEventListener("click", handleTwo);
selectOne.addEventListener("click", handleOne);
selectClear.addEventListener("click", handleClear);
selectZero.addEventListener("click", handleZero);

selectPlusMinus.addEventListener("click", handlePlusMinus);
// selectPlusMinus.addEventListener("click", handleSecondMinus);
selectAdd.addEventListener("click", handleAdd);
selectDivide.addEventListener("click", handleDivide);
selectMultiply.addEventListener("click", handleMultiply);
selectSubtract.addEventListener("click", handlesubtract);
selectEquals.addEventListener("click", handleEquals);
selectDecimal.addEventListener("click", handleDecimal);
