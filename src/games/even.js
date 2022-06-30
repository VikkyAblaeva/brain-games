import getRandomNumber from '../utils.js';
import { generateGameLogic } from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const rangeOfRandom = 100;
const beginOfRandom = 0;

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const userQuestion = getRandomNumber(beginOfRandom, rangeOfRandom);
  console.log(`Question: ${userQuestion}`);
  const rightAnswer = isEven(userQuestion) ? 'yes' : 'no';
  return rightAnswer;
};

const startEvenGame = () => generateGameLogic(gameDescription, generateRound);

export { gameDescription, generateRound, startEvenGame };
