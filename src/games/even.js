import getRandomNumber from '../utils.js';
import { generateGameLogic } from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const maxOfRandom = 100;
const minOfRandom = 0;

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const userQuestion = getRandomNumber(minOfRandom, maxOfRandom);
  console.log(`Question: ${userQuestion}`);
  const rightAnswer = isEven(userQuestion) ? 'yes' : 'no';
  return rightAnswer;
};

const startEvenGame = () => generateGameLogic(gameDescription, generateRound);

export default startEvenGame;
