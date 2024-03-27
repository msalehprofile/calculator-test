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
  if (display.innerText === "") {
    display.innerText = "9";
  } else if (
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
  if (display.innerText === "") {
    display.innerText = "8";
  } else if (
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
  if (display.innerText === "") {
    display.innerText = "7";
  } else if (
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
  if (display.innerText === "") {
    display.innerText = "6";
  } else if (
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
  if (display.innerText === "") {
    display.innerText = "5";
  } else if (
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
  if (display.innerText === "") {
    display.innerText = "4";
  } else if (
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
  if (display.innerText === "") {
    display.innerText = "3";
  } else if (
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
  if (display.innerText === "") {
    display.innerText = "2";
  } else if (
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
  if (display.innerText === "") {
    display.innerText = "1";
  } else if (
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
  if (display.innerText === "") {
    display.innerText = " ";
  } else if (
    display.innerText.charAt(display.innerText.length - 1) === "+" ||
    display.innerText.charAt(display.innerText.length - 1) === "-" ||
    display.innerText.charAt(display.innerText.length - 1) === "x" ||
    display.innerText.charAt(display.innerText.length - 1) === "/"
  ) {
    display.innerText = display.innerText + " ";
  } else {
    display.innerText = display.innerText + "0";
  }
};

//functions to handle symbols on screen. Making sure they can't be repeated

const handleClear = (event: Event) => {
  display.innerText = " ";
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
  if (display.innerText === "") {
    display.innerText = " ";
  } else if (display.innerText.charAt(0) === "-") {
    display.innerText = display.innerText.substring(1);
  } else {
    display.innerText = " -" + display.innerText;
  }
};

const handleSecondMinus = (event: Event) => {
  if (
    display.innerText.includes("+") ||
    display.innerText.includes("-") ||
    display.innerText.includes("/") ||
    display.innerText.includes("x")
  ) {
    let secondMinus: string = display.innerText;
    let splitEquation = secondMinus.split(" ").map((number) => "-" + number);
    let symbolIdentifyer = splitEquation[1].substring(1);
    let firstNumber = splitEquation[0].substring(1);
    let lastNumber = splitEquation[2];
    if (lastNumber.charAt(0) === "-") {
      display.innerText = lastNumber.substring(1);
    }
    display.innerText = firstNumber + " " + symbolIdentifyer + " " + lastNumber;
    console.log(display.innerText);
  }
};

const handleDecimal = (event: Event) => {
  if (display.innerText === "") {
    display.innerText = " ";
  } else if (
    display.innerText.charAt(display.innerText.length - 1) === "+" ||
    display.innerText.charAt(display.innerText.length - 1) === "-" ||
    display.innerText.charAt(display.innerText.length - 1) === "x" ||
    display.innerText.charAt(display.innerText.length - 1) === "/"
  ) {
    display.innerText = display.innerText + " ";
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
selectPlusMinus.addEventListener("click", handleSecondMinus);
selectAdd.addEventListener("click", handleAdd);
selectDivide.addEventListener("click", handleDivide);
selectMultiply.addEventListener("click", handleMultiply);
selectSubtract.addEventListener("click", handlesubtract);
selectEquals.addEventListener("click", handleEquals);
selectDecimal.addEventListener("click", handleDecimal);
