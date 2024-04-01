// screen query selector

const display = document.querySelector<HTMLHeadingElement>("#app__screen");

// background query selector
let background = document.querySelector("body");
const date = new Date();
const hour = date.getHours();

// change background colour if it is later than 7pm

// number query selectors
const selectInput = document.querySelectorAll<HTMLButtonElement>(".app__input");
const selectDecimal =
  document.querySelector<HTMLButtonElement>(".app__decimal");
const selectSymbol =
  document.querySelectorAll<HTMLButtonElement>(".app__symbol");

const selectClear = document.querySelector<HTMLButtonElement>("#app__clear");

// symbols query selectors
const selectPlusMinus =
  document.querySelector<HTMLButtonElement>("#app__plus-minus");
const selectpercentage =
  document.querySelector<HTMLButtonElement>("#app__percentage");
const selectEquals = document.querySelector<HTMLButtonElement>("#app__equals");

// issue with numbers & display
if (!display || !selectClear || !selectDecimal) {
  throw new Error("issue with selectors");
}

// symbols error finder

if (!selectpercentage || !selectPlusMinus || !selectEquals) {
  throw new Error("issue with selectors");
}

selectInput.forEach((number) => {
  number.addEventListener("click", () => {
    if (display.innerText === "0") {
      display.innerText = number.getAttribute("id");
    } // if there is a symbol last, add a space and the selected number, if not just add the number to the end
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
      display.innerText = reverse.reverse().join(" ") + " " + number.getAttribute("id");
    } else {
      display.innerText = display.innerText + number.getAttribute("id");
    }
  });
});

selectSymbol.forEach((symbol) => {
  symbol.addEventListener("click", () => {

    if (display.innerText === "0") {
      display.innerText = display.innerText;
    } else if (
      symbol.getAttribute("id") === "+" ||
      symbol.getAttribute("id") === "-" ||
      symbol.getAttribute("id") === "/" ||
      symbol.getAttribute("id") === "*"
    ) {
      display.innerText =
        display.innerText + " " + symbol.getAttribute("id") + " ";
    }
  });
});

//functions to handle symbols on screen. Making sure they can't be repeated

const handleClear = (event: Event) => {
  display.innerText = "0";
};

const handlePlusMinus = (event: Event) => {
  // splits the string into an array
  let splitEquation: string[] = display.innerText.split(" ").reverse();
  let lastNumber:string = splitEquation[0]
  console.log(lastNumber)

  //if just a zero is on screen, don't change display
  if (display.innerText === "0") {
    display.innerText = "0";
    // if there is no symbol and the first number is positive, change it to be negative
  } else if (lastNumber.charAt(0) !== "-") {
    lastNumber = "-"+lastNumber
    let withoutLastNumber: string[] = splitEquation.slice(1).reverse()
    display.innerText = withoutLastNumber.join(" ")+" "+ lastNumber
  }  else if (lastNumber.charAt(0) === "-") {
    lastNumber = lastNumber.slice(1)
    let withoutLastNumber: string[] = splitEquation.slice(1).reverse()
    display.innerText = withoutLastNumber.join(" ")+" "+ lastNumber
  } 


};

const handlePercentage = (event: Event) => {
  // splits the string into an array
  let splitEquation: string[] = display.innerText.split(" ").reverse();
  let lastNumber:string = splitEquation[0]

  //if just a zero is on screen, don't change display
  if (display.innerText === "0") {
    display.innerText = "0";
    // if there is no symbol divide to first number by 100
  } else  {
    lastNumber = Number(lastNumber)/100 as number
    let withoutLastNumber: string[] = splitEquation.slice(1).reverse()
    display.innerText = withoutLastNumber.join(" ")+" "+ lastNumber
  }  
};

const handleDecimal = (event: Event) => {
  if (display.innerText === "0") {
    display.innerText = " 0.";
  } else if (display.innerText.charAt(display.innerText.length - 1) === ".") {
    display.innerText = display.innerText;
  } else if (
    display.innerText.charAt(display.innerText.length - 1) === "+" ||
    display.innerText.charAt(display.innerText.length - 1) === "-" ||
    display.innerText.charAt(display.innerText.length - 1) === "*" ||
    display.innerText.charAt(display.innerText.length - 1) === "/"
  ) {
    display.innerText = display.innerText + " 0.";
  } else {
    display.innerText = display.innerText + ".";
  }
  // limiting digits on the screen
  if (display.innerText.length >= 14) {
    display.innerText = display.innerText.slice(1, 13);
  }
};

//creating an array
const handleEquals = (event: Event) => {
  let finalEquation: string = display.innerText;
  finalEquation = finalEquation.split(" ");
  let firstNumber: number = Number(finalEquation[0]);
  let firstSymbol: string = finalEquation[1];
  let secondNumber: number = Number(finalEquation[2]);
  let secondSymbol: string = finalEquation[3];
  let thirdNumber: number = Number(finalEquation[4]);

  // maths equations
  // if the array length is 3 and the first symbol is + then add the numbers together
  if (firstSymbol === "+" && finalEquation.length == 3) {
    display.innerText = firstNumber + secondNumber;
  } // if the array length is 3 and the first symbol is - then subtract
  else if (firstSymbol === "-" && finalEquation.length == 3) {
    display.innerText = firstNumber - secondNumber;
  } // if the array length is 3 and the first symbol is x then times the numbers together
  else if (firstSymbol === "*" && finalEquation.length == 3) {
    display.innerText = firstNumber * secondNumber;
  } // if the array length is 3 and the first symbol is / then divide the numbers
  else if (firstSymbol === "/" && finalEquation.length == 3) {
    display.innerText = firstNumber / secondNumber;
  } // if the array length is 5, and first and second symbols are + then add all together
  else if (
    firstSymbol === "+" &&
    finalEquation.length == 5 &&
    secondSymbol === "+"
  ) {
    display.innerText = firstNumber + secondNumber + thirdNumber;
  } // if the array length is 5, the first sybol is + and second symbol is -
  else if (
    firstSymbol === "+" &&
    finalEquation.length == 5 &&
    secondSymbol === "-"
  ) {
    display.innerText = firstNumber - secondNumber - thirdNumber;
  } // if the array length is 5, the first sybol is + and second symbol is /
  else if (
    firstSymbol === "+" &&
    finalEquation.length == 5 &&
    secondSymbol === "/"
  ) {
    display.innerText = firstNumber + secondNumber / thirdNumber;
  } // if the array length is 5, the first sybol is + and second symbol is *
  else if (
    firstSymbol === "+" &&
    finalEquation.length == 5 &&
    secondSymbol === "*"
  ) {
    display.innerText = firstNumber + secondNumber * thirdNumber;
  }
  // minus first
  // if the array length is 5, and first symbol is - and second symbol is +
  else if (
    firstSymbol === "-" &&
    finalEquation.length == 5 &&
    secondSymbol === "+"
  ) {
    display.innerText = firstNumber - secondNumber + thirdNumber;
  } // if the array length is 5, and first and second symbols are - then subract
  else if (
    firstSymbol === "-" &&
    finalEquation.length == 5 &&
    secondSymbol === "-"
  ) {
    display.innerText = firstNumber - secondNumber - thirdNumber;
  } // if the array length is 5, the first symbol is - and second symbol is /
  else if (
    firstSymbol === "-" &&
    finalEquation.length == 5 &&
    secondSymbol === "/"
  ) {
    display.innerText = firstNumber - secondNumber / thirdNumber;
  } // if the array length is 5, the first symbol is - and second symbol is *
  else if (
    firstSymbol === "-" &&
    finalEquation.length == 5 &&
    secondSymbol === "*"
  ) {
    display.innerText = firstNumber - secondNumber * thirdNumber;
  }
  // divide first
  // if the array length is 5, and first symbol is / and second symbol is +
  else if (
    firstSymbol === "/" &&
    finalEquation.length == 5 &&
    secondSymbol === "+"
  ) {
    display.innerText = firstNumber / secondNumber + thirdNumber;
  } // if the array length is 5, and first symbol is / and second symbol is -
  else if (
    firstSymbol === "/" &&
    finalEquation.length == 5 &&
    secondSymbol === "-"
  ) {
    display.innerText = firstNumber / secondNumber - thirdNumber;
  } // if the array length is 5, the first and second symbol are /
  else if (
    firstSymbol === "/" &&
    finalEquation.length == 5 &&
    secondSymbol === "/"
  ) {
    display.innerText = firstNumber / secondNumber / thirdNumber;
  } // if the array length is 5, the first symbol is / and second symbol is *
  else if (
    firstSymbol === "/" &&
    finalEquation.length == 5 &&
    secondSymbol === "*"
  ) {
    display.innerText = (firstNumber / secondNumber) * thirdNumber;
  }
  // multiply first
  // if the array length is 5, and first symbol is * and second symbol is +
  else if (
    firstSymbol === "*" &&
    finalEquation.length == 5 &&
    secondSymbol === "+"
  ) {
    display.innerText = firstNumber * secondNumber + thirdNumber;
  } // if the array length is 5, and first symbol is * and second symbol is -
  else if (
    firstSymbol === "*" &&
    finalEquation.length == 5 &&
    secondSymbol === "-"
  ) {
    display.innerText = firstNumber * secondNumber - thirdNumber;
  } // if the array length is 5, and first symbol is * and second symbol is /
  else if (
    firstSymbol === "*" &&
    finalEquation.length == 5 &&
    secondSymbol === "/"
  ) {
    display.innerText = (firstNumber * secondNumber) / thirdNumber;
  } // if the array length is 5, the first and second symbol are /
  else if (
    firstSymbol === "*" &&
    finalEquation.length == 5 &&
    secondSymbol === "*"
  ) {
    display.innerText = firstNumber * secondNumber * thirdNumber;
  }
  // limiting digits on the screen
  if (display.innerText.length >= 14) {
    display.innerText = display.innerText.slice(1, 13);
  }
};

// event listeners
selectClear.addEventListener("click", handleClear);
selectDecimal.addEventListener("click", handleDecimal);
selectPlusMinus.addEventListener("click", handlePlusMinus);
selectEquals.addEventListener("click", handleEquals);
selectpercentage.addEventListener("click", handlePercentage);
