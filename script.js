let randomQuote = "";

function generateQuote() {
  document.getElementById("quote-result").innerHTML = `${randomQuote}`;
}

function generateNumber() {
  let randomNumber = Math.floor(Math.random() * 9);

  if (randomNumber === 0) {
    randomQuote = "test 1";
  } else if (randomNumber === 1) {
    randomQuote = "test 2";
  } else if (randomNumber === 2) {
    randomQuote = "test 3";
  } else if (randomNumber === 3) {
    randomQuote = "test 4";
  } else if (randomNumber === 4) {
    randomQuote = "test 5";
  } else if (randomNumber === 5) {
    randomQuote = "test 6";
  } else if (randomNumber === 6) {
    randomQuote = "test 7";
  } else if (randomNumber === 7) {
    randomQuote = "test 8";
  } else if (randomNumber === 8) {
    randomQuote = "test 9";
  }

  generateQuote();
}
