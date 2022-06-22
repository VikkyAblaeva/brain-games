import { getRandomNumber } from '../utils.js';
import { answerOfUser } from '../index.js';

const gamePhrase = 'What is the result of the expression?';
let userAnswerAndCorrectAnswer = [];
let userQuestion = [];
const rangeOfRandomeNumber = 20;
const rangeOfRandomeOperands = 2;
const operands = '+-*';
let resultOfOperation = 0;

const generateRound = () => {
  userAnswerAndCorrectAnswer = [];
  userQuestion = [
    getRandomNumber(rangeOfRandomeNumber),
    operands[getRandomNumber(rangeOfRandomeOperands)],
    getRandomNumber(rangeOfRandomeNumber),
  ];
  if (userQuestion[1] === '+') {
    resultOfOperation = Number(userQuestion[0]) + Number(userQuestion[2]);
  }
  if (userQuestion[1] === '-') {
    resultOfOperation = Number(userQuestion[0]) - Number(userQuestion[2]);
  }
  if (userQuestion[1] === '*') {
    resultOfOperation = Number(userQuestion[0]) * Number(userQuestion[2]);
  }
  userAnswerAndCorrectAnswer.push(resultOfOperation);
  console.log(`Question: ${userQuestion[0]} ${userQuestion[1]} ${userQuestion[2]}`);
  const userAnswer = answerOfUser();
  userAnswerAndCorrectAnswer.push(Number(userAnswer));
  return userAnswerAndCorrectAnswer;
};

export { gamePhrase, generateRound };
