import { getRandomNumber } from '../utils.js';
import { getUserAnswer, generateGameLogic } from '../index.js';

const gamePhrase = 'Find the greatest common divisor of given numbers.';
const rangeOfRandom = 20;
const beginRangeofRandom = 1;

const generateRound = () => {
  let maxGcd = 0;
  const userAnswerAndCorrectAnswer = [];
  let divisibleNumbers = [];
  divisibleNumbers = [
    getRandomNumber(rangeOfRandom) + beginRangeofRandom,
    getRandomNumber(rangeOfRandom) + beginRangeofRandom,
  ];
  const min = Math.min.apply(null, divisibleNumbers);
  console.log(`Question: ${divisibleNumbers[0]} ${divisibleNumbers[1]}`);
  const userAnswer = getUserAnswer();
  for (let i = 1; i <= min; i += 1) {
    if (divisibleNumbers[0] % i === 0 && divisibleNumbers[1] % i === 0) {
      maxGcd = i;
    }
  }
  userAnswerAndCorrectAnswer.push(Number(maxGcd));
  userAnswerAndCorrectAnswer.push(Number(userAnswer));
  return userAnswerAndCorrectAnswer;
};

const generateFinalGame = () => generateGameLogic(gamePhrase, generateRound);

export { gamePhrase, generateRound, generateFinalGame };
