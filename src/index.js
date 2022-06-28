import readlineSync from 'readline-sync';

const getUserAnswer = () => {
  const userAnswer = readlineSync.question('You answer: ');
  return userAnswer;
};
const roundCount = 3;

const generateGameLogic = (gameRule, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRule);

  for (let i = 0; i < roundCount; i += 1) {
    const userQuestion = generateRound();
    const userAnswer = readlineSync.question('You answer: ');
    if (userQuestion === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${userQuestion}'.`);
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export {
  generateGameLogic,
  roundCount,
  getUserAnswer,
};
