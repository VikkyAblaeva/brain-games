import { getRandomNumber } from '../utils.js';
import { getUserAnswer, generateGameLogic } from '../index.js';

const gamePhrase = 'What is the result of the expression?';
const rangeOfRandomeNumber = 20;
const rangeOfRandomeOperands = 2;
const operands = '+-*';

const generateRound = () => {
  let resultOfOperation = 0;
  const userAnswerAndCorrectAnswer = [];
  const userQuestion = [
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
  const userAnswer = getUserAnswer();
  userAnswerAndCorrectAnswer.push(Number(userAnswer));
  return userAnswerAndCorrectAnswer;
};

const generateFinalGame = () => generateGameLogic(gamePhrase, generateRound);

export { gamePhrase, generateRound, generateFinalGame };
