// Get User Choice
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  if (
    userInput === 'rock' ||
    userInput === 'paper' ||
    userInput === 'scissors' ||
    userInput === 'bomb'
  ) {
    return userInput;
  } else {
    console.log('Error! Please choose rock, paper, scissors, or bomb.');
  }
};

// Get Computer Choice
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

// Determine Winner
const determineWinner = (userChoice, computerChoice) => {
  // Secret cheat code
  if (userChoice === 'bomb') {
    return '💣 Secret code activated! You automatically win!';
  }

  // Tie condition
  if (userChoice === computerChoice) {
    return "It's a tie!";
  }

  // Rock logic
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer wins!';
    } else {
      return 'You win!';
    }
  }

  // Paper logic
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer wins!';
    } else {
      return 'You win!';
    }
  }

  // Scissors logic
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer wins!';
    } else {
      return 'You win!';
    }
  }
};

// Play Game
const playGame = () => {
  // Change the choice here:
  const userChoice = getUserChoice(prompt('Choose rock, paper, scissors, or bomb:'));

  if (!userChoice) return;

  const computerChoice = getComputerChoice();

  console.log(`You chose: ${userChoice}`);
  console.log(`Computer chose: ${computerChoice}`);

  console.log(determineWinner(userChoice, computerChoice));
};

// Start Game
playGame();