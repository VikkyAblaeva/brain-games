import { getRandomNumber, isPrime } from '../utils.js';
import { generateGameLogic } from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const beginOfRandom = 2;
const rangeOfRandom = 20;

const generateRound = () => {
  const userNumber = getRandomNumber(beginOfRandom, rangeOfRandom);
  const rightAnswer = isPrime(userNumber) ? 'yes' : 'no';
  console.log(`Question: ${userNumber}`);
  return rightAnswer;
};

const generateFinalGame = () => generateGameLogic(gameDescription, generateRound);

export { gameDescription, generateRound, generateFinalGame };
