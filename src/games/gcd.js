import getRandomNumber from '../utils.js';
import { startGame } from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const maxOfRandomNumber = 20;
const minOfRandomNumber = 1;

const findGcd = (numbers) => {
  let maxGcd = 0;
  const minOfNumbers = Math.min.apply(null, numbers);
  for (let i = 1; i <= minOfNumbers; i += 1) {
    if (numbers[0] % i === 0 && numbers[1] % i === 0) {
      maxGcd = i;
    }
  }
  return maxGcd;
};

const generateRound = () => {
  const divisibleNumbers = [
    getRandomNumber(minOfRandomNumber, maxOfRandomNumber),
    getRandomNumber(minOfRandomNumber, maxOfRandomNumber),
  ];
  const question = `Question: ${divisibleNumbers[0]} ${divisibleNumbers[1]}`;
  const rightAnswer = String(findGcd(divisibleNumbers));
  const questionAnswer = [question, rightAnswer];
  return questionAnswer;
};

const playGcdGame = () => startGame(gameDescription, generateRound);

export default playGcdGame;
