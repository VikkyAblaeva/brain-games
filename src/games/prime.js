import { getRandomNumber } from '../utils.js';
import { generateGameLogic } from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const beginOfRandom = 2;
const rangeOfRandom = 20;

const isPrime = (number) => {
  let divisiors = 0;
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      divisiors += 1;
    }
  }
  return divisiors === 0;
};

const generateRound = () => {
  const userNumber = getRandomNumber(beginOfRandom, rangeOfRandom);
  const rightAnswer = isPrime(userNumber) ? 'yes' : 'no';
  console.log(`Question: ${userNumber}`);
  return rightAnswer;
};

const startPrimeGame = () => generateGameLogic(gameDescription, generateRound);

export { gameDescription, generateRound, startPrimeGame };
