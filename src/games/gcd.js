import { getRandomNumber, findGcd } from '../utils.js';
import { getUserAnswer, generateGameLogic } from '../index.js';

const gamePhrase = 'Find the greatest common divisor of given numbers.';
const rangeOfRandom = 20;
const beginRangeofRandom = 1;

const generateRound = () => {
  const userAnswerAndCorrectAnswer = [];
  const divisibleNumbers = [
    getRandomNumber(beginRangeofRandom, rangeOfRandom),
    getRandomNumber(beginRangeofRandom, rangeOfRandom),
  ];

  console.log(`Question: ${divisibleNumbers[0]} ${divisibleNumbers[1]}`);
  const userAnswer = getUserAnswer();
  userAnswerAndCorrectAnswer.push(findGcd(divisibleNumbers));
  userAnswerAndCorrectAnswer.push(Number(userAnswer));
  return userAnswerAndCorrectAnswer;
};

const generateFinalGame = () => generateGameLogic(gamePhrase, generateRound);

export { gamePhrase, generateRound, generateFinalGame };
