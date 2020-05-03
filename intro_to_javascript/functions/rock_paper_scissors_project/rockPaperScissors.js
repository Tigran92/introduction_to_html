const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("ERROR: Type a valid name.");
  }
};
//console.log(getUserChoice('hi'));

function getComputerChoice() {
  let choices = Math.floor(Math.random() * 3);
  if (choices === 1) {
    return "rock";
  } else if (choices === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

//console.log(getComputerChoice());
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  } else if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer won!.";
    } else {
      return "The user won!";
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "The computer won!.";
    } else {
      return "The user won!";
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "The computer won!.";
    } else {
      return "The user won!";
    }
  } else if (userChoice === "bomb") {
    return "The user won! Bonus cheat code !!!";
  } else {
    return "Try again!";
  }
}
// console.log(determineWinner('rock', 'scissors'));
const playGame = () => {
  let userChoice = getUserChoice("bomb");
  let computerChoice = getComputerChoice();
  console.log("You: " + userChoice);
  console.log("Computer: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};
playGame();
