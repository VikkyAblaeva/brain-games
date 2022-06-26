import readlineSync from 'readline-sync';

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

const getUserAnswer = () => {
  const userAnswer = readlineSync.question('You answer: ');
  return userAnswer;
};
const roundCount = 3;

const generateGameLogic = (gamePhrase, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const nameOfUser = getUserName();
  console.log(`Hello, ${nameOfUser}!`);
  console.log(gamePhrase);

  for (let i = 0; i < roundCount; i += 1) {
    const [question, answer] = generateRound();
    if (question === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${question}'.`);
      return console.log(`Let's try again, ${nameOfUser}!`);
    }
  }
  return console.log(`Congratulations, ${nameOfUser}!`);
};

export {
  generateGameLogic,
  getUserName,
  roundCount,
  getUserAnswer,
};
