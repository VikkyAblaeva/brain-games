import readlineSync from 'readline-sync';

const winOfUser = (nameOfUser) => {
  console.log(`Congratulations, ${nameOfUser}!`);
};

const noWinOfUser = (userAnswer, correctAnswer, nameOfUser) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${nameOfUser}!`);
};

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

const answerOfUser = () => {
  const userAnswer = readlineSync.question('You answer: ');
  return userAnswer;
};
const roundCount = 3;

const gameLogic = (gamePhrase, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const nameOfUser = getUserName();
  console.log(`Hello, ${nameOfUser}!`);
  console.log(gamePhrase);

  let correctAndUserAnswer = [];
  for (let i = 0; i < roundCount; i += 1) {
    correctAndUserAnswer = generateRound();
    if (correctAndUserAnswer[0] === correctAndUserAnswer[1]) {
      console.log('Correct!');
    } else {
      return noWinOfUser(correctAndUserAnswer[1], correctAndUserAnswer[0], nameOfUser);
    }
  }

  return winOfUser(nameOfUser);
};

export {
  winOfUser,
  noWinOfUser,
  gameLogic,
  getUserName,
  roundCount,
  answerOfUser,
};
