import getRandomNumber from '../utils.js';
import { startGame } from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const maxOfRandomNumber = 100;
const minOfRandomNumber = 0;

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const userQuestion = getRandomNumber(minOfRandomNumber, maxOfRandomNumber);
  const question = `Question: ${userQuestion}`;
  const rightAnswer = isEven(userQuestion) ? 'yes' : 'no';
  const questionAnswer = [question, rightAnswer];
  return questionAnswer;
};

const playEvenGame = () => startGame(gameDescription, generateRound);

export default playEvenGame;
