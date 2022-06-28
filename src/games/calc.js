import { getRandomNumber, getCalculatorResult } from '../utils.js';
import { getUserAnswer, generateGameLogic } from '../index.js';

const gamePhrase = 'What is the result of the expression?';
const rangeOfRandomNumber = 20;
const beginOfRandom = 0;
const operands = '+-*';
const rangeOfRandomOperands = 2;

const generateRound = () => {
  const userAnswerAndCorrectAnswer = [];
  const operand = operands[getRandomNumber(beginOfRandom, rangeOfRandomOperands)];
  const firstNumber = getRandomNumber(beginOfRandom, rangeOfRandomNumber);
  const secondNumber = getRandomNumber(beginOfRandom, rangeOfRandomNumber);
  const resultOfOperation = getCalculatorResult(firstNumber, secondNumber, operand);
  userAnswerAndCorrectAnswer.push(resultOfOperation);
  console.log(`Question: ${firstNumber} ${operand} ${secondNumber}`);
  const userAnswer = getUserAnswer();
  userAnswerAndCorrectAnswer.push(Number(userAnswer));
  return userAnswerAndCorrectAnswer;
};

const generateFinalGame = () => generateGameLogic(gamePhrase, generateRound);

export { gamePhrase, generateRound, generateFinalGame };
