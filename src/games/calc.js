import { getRandomNumber } from '../utils.js';
import { getUserAnswer, generateGameLogic } from '../index.js';

const gamePhrase = 'What is the result of the expression?';
const rangeOfRandomNumber = 20;
const rangeOfRandomOperands = 2;
const operands = '+-*';
const beginOfRandom = 0;

const generateRound = () => {
  let resultOfOperation = 0;
  const userAnswerAndCorrectAnswer = [];
  const firstNumber = getRandomNumber(beginOfRandom, rangeOfRandomNumber);
  const secondNumber = getRandomNumber(beginOfRandom, rangeOfRandomNumber);
  const operand = operands[getRandomNumber(beginOfRandom, rangeOfRandomOperands)];

  switch (operand) {
    case '+':
      resultOfOperation = firstNumber + secondNumber;
      break;
    case '-':
      resultOfOperation = firstNumber - secondNumber;
      break;
    case '*':
      resultOfOperation = firstNumber * secondNumber;
      break;
    default:
      throw new Error(`Unknown operand: '${operand}'!`);
  }
  userAnswerAndCorrectAnswer.push(resultOfOperation);
  console.log(`Question: ${firstNumber} ${operand} ${secondNumber}`);
  const userAnswer = getUserAnswer();
  userAnswerAndCorrectAnswer.push(Number(userAnswer));
  return userAnswerAndCorrectAnswer;
};

const generateFinalGame = () => generateGameLogic(gamePhrase, generateRound);

export { gamePhrase, generateRound, generateFinalGame };
