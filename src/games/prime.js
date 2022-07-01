import getRandomNumber from '../utils.js';
import { startGame } from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minOfRandomNumber = 2;
const maxOfRandomNumber = 20;

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
  const randomNumber = getRandomNumber(minOfRandomNumber, maxOfRandomNumber);
  const rightAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  const question = `Question: ${randomNumber}`;
  const questionAnswer = [question, rightAnswer];
  return questionAnswer;
};

const playPrimeGame = () => startGame(gameDescription, generateRound);

export default playPrimeGame;
