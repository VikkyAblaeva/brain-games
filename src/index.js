import readlineSync from 'readline-sync';

const maxRoundCount = 3;

const startGame = (gameDescription, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);

  for (let i = 0; i < maxRoundCount; i += 1) {
    const [userQuestion, rightAnswer] = generateRound();
    console.log(userQuestion);
    const userAnswer = readlineSync.question('You answer: ');
    if (rightAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export {
  startGame,
  maxRoundCount,
};
