// screen query selector
const display = document.querySelector<HTMLHeadingElement>(
  "#calculator__display"
);

// background query selector
const background = document.querySelector<HTMLBodyElement>(".calc-app");
const mainBorderShadows =
  document.querySelectorAll<HTMLBodyElement>(".main-buttons");
const scienceBorderShadows =
  document.querySelectorAll<HTMLBodyElement>(".scientific-button");

// getting the current date and time
const date = new Date();
const hour = date.getHours();

// issue with background selector
if (!background || !mainBorderShadows || !scienceBorderShadows) {
  throw new Error("issue with selectors");
}

// change background colour after 7pm
if (hour > 19) {
  if (display != null) {
    background.style.backgroundColor = "#2a3439";
    display.style.boxShadow = "3px 4px 4px #2a3439";
    mainBorderShadows.forEach((button) => {
      button.style.boxShadow = "3px 4px 4px #2a3439";
    });
    scienceBorderShadows.forEach((button) => {
      button.style.boxShadow = "3px 4px 4px #2a3439";
    });
  }
}

// number query selectors
const selectInput = document.querySelectorAll<HTMLButtonElement>(
  ".main-buttons__number"
);
const selectDecimal = document.querySelector<HTMLButtonElement>(
  ".main-buttons__decimal"
);
const selectSymbol = document.querySelectorAll<HTMLButtonElement>(
  ".main-buttons__symbol"
);

const selectClear = document.querySelector<HTMLButtonElement>(
  "#main-buttons__clear"
);

// symbols query selectors
const selectPlusMinus = document.querySelector<HTMLButtonElement>(
  "#main-buttons__plus-minus"
);
const selectpercentage = document.querySelector<HTMLButtonElement>(
  "#main-buttons__percentage"
);
const selectEquals = document.querySelector<HTMLButtonElement>(
  "#main-buttons__equals"
);

// issue with numbers & display
if (
  !display ||
  !selectClear ||
  !selectDecimal ||
  !selectInput ||
  !selectSymbol
) {
  throw new Error("issue with selectors");
}

// symbols error finder
if (!selectpercentage || !selectPlusMinus || !selectEquals) {
  throw new Error("issue with selectors");
}

// function for adding numbers onto screen
selectInput.forEach((number) => {
  number.addEventListener("click", () => {
    if (display.innerText === "0") {
      display.innerText = number.getAttribute("id") as string;
    } // if the screen is showing 12 characters do not add any more
    else if (display.innerText.length >= 12) {
      display.innerText = display.innerText;
    }

    // if there is a symbol last, add a space and the selected number, if not just add the number to the end
    else if (
      display.innerText.charAt(display.innerText.length - 1) === "+" ||
      display.innerText.charAt(display.innerText.length - 1) === "-" ||
      display.innerText.charAt(display.innerText.length - 1) === "*" ||
      display.innerText.charAt(display.innerText.length - 1) === "/"
    ) {
      display.innerText = display.innerText + " " + number.getAttribute("id");
    } // if the last three characters are a symbol and a zero, replace the zero with a number
    else if (
      display.innerText.slice(-3) === "+ 0" ||
      display.innerText.slice(-3) === "- 0" ||
      display.innerText.slice(-3) === "/ 0" ||
      display.innerText.slice(-3) === "* 0"
    ) {
      let numberAfterZero = display.innerText.split(" ");
      let reverse = numberAfterZero.reverse().slice(1);
      display.innerText =
        reverse.reverse().join(" ") + " " + number.getAttribute("id");
    } else {
      display.innerText = display.innerText + number.getAttribute("id");
    }
  });
});

// function for adding symbols onto screen
selectSymbol.forEach((symbol) => {
  symbol.addEventListener("click", () => {
    //if display is 0 or the last character is a symbol, dont change screen
    if (
      display.innerText === "0" ||
      display.innerText.charAt(display.innerText.length - 1) === "+" ||
      display.innerText.charAt(display.innerText.length - 1) === "-" ||
      display.innerText.charAt(display.innerText.length - 1) === "*" ||
      display.innerText.charAt(display.innerText.length - 1) === "/"
    ) {
      display.innerText = display.innerText;
    } // if the screen is showing 12 characters do not add any more
    else if (display.innerText.length >= 12) {
      display.innerText = display.innerText;
    } else if (
      symbol.getAttribute("id") === "+" ||
      symbol.getAttribute("id") === "-" ||
      symbol.getAttribute("id") === "/" ||
      symbol.getAttribute("id") === "*"
    ) {
      // else display the chosen symbol
      display.innerText =
        display.innerText + " " + symbol.getAttribute("id") + " ";
    }
  });
});

//functions to handle clear button
const handleClear = () => {
  display.innerText = "0";
};

const handlePlusMinus = () => {
  // splits the string into an array
  let splitEquation: string[] = display.innerText.split(" ").reverse();
  let lastNumber: string = splitEquation[0];
  console.log(lastNumber);

  //if just a zero is on screen, don't change display
  if (display.innerText === "0") {
    display.innerText = "0";
  } // if the screen is showing 12 characters do not add any more
  else if (display.innerText.length >= 12) {
    display.innerText = display.innerText;
  } // if the last character is a symbol, dont change
  else if (
    display.innerText.charAt(display.innerText.length - 1) === "+" ||
    display.innerText.charAt(display.innerText.length - 1) === "*" ||
    display.innerText.charAt(display.innerText.length - 1) === "/"
  ) {
    display.innerText = display.innerText;
  } // if the last number is positive,change it to be negative
  else if (lastNumber.charAt(0) !== "-") {
    lastNumber = "-" + lastNumber;
    let withoutLastNumber: string[] = splitEquation.slice(1).reverse();
    display.innerText = withoutLastNumber.join(" ") + " " + lastNumber;
  } // if the last number is negative,change it to be positive
  else if (lastNumber.charAt(0) === "-") {
    lastNumber = lastNumber.slice(1);
    let withoutLastNumber: string[] = splitEquation.slice(1).reverse();
    display.innerText = withoutLastNumber.join(" ") + " " + lastNumber;
  }
};

const handlePercentage = () => {
  // splits the string into an array
  let splitEquation: string[] = display.innerText.split(" ").reverse();
  let lastNumber: string | number = splitEquation[0];

  //if just a zero is on screen, don't change display
  if (display.innerText === "0") {
    display.innerText = "0";
  } // if the screen is showing 12 characters do not add any more
  else if (display.innerText.length >= 12) {
    display.innerText = display.innerText;
  } // if the last character is a symbol, dont change
  else if (
    display.innerText.charAt(display.innerText.length - 1) === "+" ||
    display.innerText.charAt(display.innerText.length - 1) === "*" ||
    display.innerText.charAt(display.innerText.length - 1) === "/" ||
    display.innerText.charAt(display.innerText.length - 1) === "-"
  ) {
    display.innerText = display.innerText;
  } // divide the last number by 100
  else {
    lastNumber = (Number(lastNumber) / 100) as number;
    let withoutLastNumber: string[] = splitEquation.slice(1).reverse();
    display.innerText = withoutLastNumber.join(" ") + " " + lastNumber;
  }
};

const handleDecimal = () => {
  if (display.innerText === "0") {
    display.innerText = " 0.";
  } // if the last character is . then dont change display
  else if (display.innerText.charAt(display.innerText.length - 1) === ".") {
    display.innerText = display.innerText;
  } // if last character is a symbol add 0. to the end
  else if (
    display.innerText.charAt(display.innerText.length - 1) === "+" ||
    display.innerText.charAt(display.innerText.length - 1) === "-" ||
    display.innerText.charAt(display.innerText.length - 1) === "*" ||
    display.innerText.charAt(display.innerText.length - 1) === "/"
  ) {
    display.innerText = display.innerText + " 0.";
  } // else just add a decimal
  else {
    display.innerText = display.innerText + ".";
  }
};

//creating an array
const handleEquals = () => {
  let finalEquation: string[] = display.innerText.split(" ");
  let firstNumber: number = Number(finalEquation[0]);
  let firstSymbol: string = finalEquation[1];
  let secondNumber: number = Number(finalEquation[2]);
  let secondSymbol: string = finalEquation[3];
  let thirdNumber: number = Number(finalEquation[4]);

  // maths equations
  // if the array length is 3 and the first symbol is + then add the numbers together
  if (firstSymbol === "+" && finalEquation.length == 3) {
    display.innerText = String(firstNumber + secondNumber).slice(0,11);
  } // if the array length is 3 and the first symbol is - then subtract
  else if (firstSymbol === "-" && finalEquation.length == 3) {
    display.innerText = String(firstNumber - secondNumber).slice(0,11);
  } // if the array length is 3 and the first symbol is x then times the numbers together
  else if (firstSymbol === "*" && finalEquation.length == 3) {
    display.innerText = String(firstNumber * secondNumber).slice(0,11);
  } // if the array length is 3 and the first symbol is / then divide the numbers
  else if (firstSymbol === "/" && finalEquation.length == 3) {
    display.innerText = String(firstNumber / secondNumber).slice(0,11);
  } // if the array length is 5, and first and second symbols are + then add all together
  else if (
    firstSymbol === "+" &&
    finalEquation.length == 5 &&
    secondSymbol === "+"
  ) {
    display.innerText = String(firstNumber + secondNumber + thirdNumber).slice(0,11);
  } // if the array length is 5, the first sybol is + and second symbol is -
  else if (
    firstSymbol === "+" &&
    finalEquation.length == 5 &&
    secondSymbol === "-"
  ) {
    display.innerText = String(firstNumber - secondNumber - thirdNumber).slice(0,11);
  } // if the array length is 5, the first sybol is + and second symbol is /
  else if (
    firstSymbol === "+" &&
    finalEquation.length == 5 &&
    secondSymbol === "/"
  ) {
    display.innerText = String(firstNumber + secondNumber / thirdNumber).slice(0,11);
  } // if the array length is 5, the first sybol is + and second symbol is *
  else if (
    firstSymbol === "+" &&
    finalEquation.length == 5 &&
    secondSymbol === "*"
  ) {
    display.innerText = String(firstNumber + secondNumber * thirdNumber).slice(0,11);
  }
  // minus first
  // if the array length is 5, and first symbol is - and second symbol is +
  else if (
    firstSymbol === "-" &&
    finalEquation.length == 5 &&
    secondSymbol === "+"
  ) {
    display.innerText = String(firstNumber - secondNumber + thirdNumber).slice(0,11);
  } // if the array length is 5, and first and second symbols are - then subract
  else if (
    firstSymbol === "-" &&
    finalEquation.length == 5 &&
    secondSymbol === "-"
  ) {
    display.innerText = String(firstNumber - secondNumber - thirdNumber).slice(0,11);
  } // if the array length is 5, the first symbol is - and second symbol is /
  else if (
    firstSymbol === "-" &&
    finalEquation.length == 5 &&
    secondSymbol === "/"
  ) {
    display.innerText = String(firstNumber - secondNumber / thirdNumber).slice(0,11);
  } // if the array length is 5, the first symbol is - and second symbol is *
  else if (
    firstSymbol === "-" &&
    finalEquation.length == 5 &&
    secondSymbol === "*"
  ) {
    display.innerText = String(firstNumber - secondNumber * thirdNumber).slice(0,11);
  }
  // divide first
  // if the array length is 5, and first symbol is / and second symbol is +
  else if (
    firstSymbol === "/" &&
    finalEquation.length == 5 &&
    secondSymbol === "+"
  ) {
    display.innerText = String(firstNumber / secondNumber + thirdNumber).slice(0,11);
  } // if the array length is 5, and first symbol is / and second symbol is -
  else if (
    firstSymbol === "/" &&
    finalEquation.length == 5 &&
    secondSymbol === "-"
  ) {
    display.innerText = String(firstNumber / secondNumber - thirdNumber).slice(0,11);
  } // if the array length is 5, the first and second symbol are /
  else if (
    firstSymbol === "/" &&
    finalEquation.length == 5 &&
    secondSymbol === "/"
  ) {
    display.innerText = String(firstNumber / secondNumber / thirdNumber).slice(0,11);
  } // if the array length is 5, the first symbol is / and second symbol is *
  else if (
    firstSymbol === "/" &&
    finalEquation.length == 5 &&
    secondSymbol === "*"
  ) {
    display.innerText = String((firstNumber / secondNumber) * thirdNumber).slice(0,11);
  }
  // multiply first
  // if the array length is 5, and first symbol is * and second symbol is +
  else if (
    firstSymbol === "*" &&
    finalEquation.length == 5 &&
    secondSymbol === "+"
  ) {
    display.innerText = String(firstNumber * secondNumber + thirdNumber).slice(0,11);
  } // if the array length is 5, and first symbol is * and second symbol is -
  else if (
    firstSymbol === "*" &&
    finalEquation.length == 5 &&
    secondSymbol === "-"
  ) {
    display.innerText = String(firstNumber * secondNumber - thirdNumber).slice(0,11);
  } // if the array length is 5, and first symbol is * and second symbol is /
  else if (
    firstSymbol === "*" &&
    finalEquation.length == 5 &&
    secondSymbol === "/"
  ) {
    display.innerText = String((firstNumber * secondNumber) / thirdNumber).slice(0,11);
  } // if the array length is 5, the first and second symbol are /
  else if (
    firstSymbol === "*" &&
    finalEquation.length == 5 &&
    secondSymbol === "*"
  ) {
    display.innerText = String(firstNumber * secondNumber * thirdNumber).slice(0,11);
  }
};

// event listeners
selectClear.addEventListener("click", handleClear);
selectDecimal.addEventListener("click", handleDecimal);
selectPlusMinus.addEventListener("click", handlePlusMinus);
selectEquals.addEventListener("click", handleEquals);
selectpercentage.addEventListener("click", handlePercentage);
