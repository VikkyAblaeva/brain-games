import { getRandomNumber } from '../utils.js';
import { generateGameLogic } from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const rangeOfRandom = 20;
const beginRangeofRandom = 1;

const findGcd = (numbers) => {
  let maxGcd = 0;
  const min = Math.min.apply(null, numbers);
  for (let i = 1; i <= min; i += 1) {
    if (numbers[0] % i === 0 && numbers[1] % i === 0) {
      maxGcd = i;
    }
  }
  return maxGcd;
};

const generateRound = () => {
  const divisibleNumbers = [
    getRandomNumber(beginRangeofRandom, rangeOfRandom),
    getRandomNumber(beginRangeofRandom, rangeOfRandom),
  ];
  console.log(`Question: ${divisibleNumbers[0]} ${divisibleNumbers[1]}`);
  const rightAnswer = String(findGcd(divisibleNumbers));
  return rightAnswer;
};

const startGcdGame = () => generateGameLogic(gameDescription, generateRound);

export { gameDescription, generateRound, startGcdGame };
