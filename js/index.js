let string = prompt("Enter string");

function result(el) {
  let countLetter;
  let countNumber;
  let countSymbol;

  let regexpString = /[\p{Alpha}]/gu;
  let regexpNumber = /[\p{Nd}]/gu;
  let regexpSymbol = /[^\s]/gu;

  countLetter = el.match(regexpString);
  countNumber = el.match(regexpNumber);
  countSymbol = el.match(regexpSymbol);

  if (countLetter === null) {
    countLetter = 0;
  } else if (typeof countLetter === "object") {
    countLetter = countLetter.length;
  }

  if (countNumber === null) {
    countNumber = 0;
  } else if (typeof countNumber === "object") {
    countNumber = countNumber.length;
  }

  if (countSymbol === null) {
    countSymbol = 0;
  } else if (typeof countSymbol === "object") {
    countSymbol = countSymbol.length - countNumber - countLetter;
  }
  return `<h4>Result:</h4>letter- ${countLetter}<br>number- ${countNumber}<br>symbol- ${countSymbol}`;
}

document.write(result(string));
