import { getRandomNumber, isPrime } from '../utils.js';
import { generateGameLogic } from '../index.js';

const gamePhrase = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const beginOfRandom = 2;
const rangeOfRandom = 20;

const generateRound = () => {
  const userNumber = getRandomNumber(beginOfRandom, rangeOfRandom);
  const rightAnswer = isPrime(userNumber) ? 'yes' : 'no';
  console.log(`Question: ${userNumber}`);
  return rightAnswer;
};

const generateFinalGame = () => generateGameLogic(gamePhrase, generateRound);

export { gamePhrase, generateRound, generateFinalGame };
