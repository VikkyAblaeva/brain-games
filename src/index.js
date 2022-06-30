import readlineSync from 'readline-sync';

const roundCount = 3;

const generateGameLogic = (gameDescription, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);

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
};
