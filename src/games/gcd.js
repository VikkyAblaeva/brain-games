import { getRandomNumber } from '../utils.js';
import { answerOfUser } from '../index.js';

const gamePhrase = 'Find the greatest common divisor of given numbers.';
let min = 0;
let maxGcd = 0;
const rangeOfRandom = 20;
let divisibleNumbers = [];
let userAnswer = 0;
const beginRangeofRandom = 1;
let userAnswerAndCorrectAnswer = [];

const generateRound = () => {
  userAnswerAndCorrectAnswer = [];
  divisibleNumbers = [];
  divisibleNumbers = [
    getRandomNumber(rangeOfRandom) + beginRangeofRandom,
    getRandomNumber(rangeOfRandom) + beginRangeofRandom,
  ];
  min = Math.min.apply(null, divisibleNumbers);
  console.log(`Question: ${divisibleNumbers[0]} ${divisibleNumbers[1]}`);
  userAnswer = answerOfUser();
  for (let i = 1; i <= min; i += 1) {
    if (divisibleNumbers[0] % i === 0 && divisibleNumbers[1] % i === 0) {
      maxGcd = i;
    }
  }
  userAnswerAndCorrectAnswer.push(Number(maxGcd));
  userAnswerAndCorrectAnswer.push(Number(userAnswer));
  return userAnswerAndCorrectAnswer;
};

export { gamePhrase, generateRound };
