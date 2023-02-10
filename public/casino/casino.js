let myRange = document.getElementById("myRange");
let guessRange = document.getElementById("guessRange");
let output = document.getElementById("bet__amount");
let guessOutput = document.getElementById("number__guess");
let spinButton = document.getElementById("spin-btn");
let finalGuessedNumber = document.getElementById("final__number");
let outputOfGuessedNumber = document.getElementById("final__message");
let balance = document.getElementById("balance");
var playerHistory = [""];
let balanceValue = 5000;
let betAmount = 0;
myRange.oninput = function() {
  betAmount = this.value;
  output.innerHTML = `${this.value}$`;
  balance.innerHTML = `${(balanceValue - this.value)}`;
}

guessRange.oninput = function() {
  guessOutput.innerHTML = `${this.value}`
}

spinButton.addEventListener('click', guessingNumber);




function guessingNumber() {
  let x = Math.floor(Math.random() * 10) + 1;
  console.log(x);
  if(balanceValue > 0) {
    if(x == guessRange.value) {
      balanceValue = balanceValue + betAmount*10;
      balance.innerHTML = balanceValue;
      outputOfGuessedNumber.style.color = "blue";
      playerHistory.push("win");
      outputOfGuessedNumber.innerHTML = "Congratulation! You Won";
    } else{
      balanceValue = balanceValue - betAmount*10;
      balance.innerHTML = balanceValue;
      outputOfGuessedNumber.style.color = "red";
      playerHistory.push("loss");
      outputOfGuessedNumber.innerHTML = "Sorry! You Loss";
    }
  }
   else {
    outputOfGuessedNumber.innerHTML = "Sorry! You don't have enough money to play";
  }
  
  return x;
}