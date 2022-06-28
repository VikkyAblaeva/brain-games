import { getRandomNumber, getCalculatorResult } from '../utils.js';
import { generateGameLogic } from '../index.js';

const gameRule = 'What is the result of the expression?';
const rangeOfRandomNumber = 20;
const beginOfRandom = 0;
const operands = '+-*';
const rangeOfRandomOperands = 2;

const generateRound = () => {
  const operand = operands[getRandomNumber(beginOfRandom, rangeOfRandomOperands)];
  const firstNumber = getRandomNumber(beginOfRandom, rangeOfRandomNumber);
  const secondNumber = getRandomNumber(beginOfRandom, rangeOfRandomNumber);
  const resultOfOperation = String(getCalculatorResult(firstNumber, secondNumber, operand));
  console.log(`Question: ${firstNumber} ${operand} ${secondNumber}`);
  return resultOfOperation;
};

const generateFinalGame = () => generateGameLogic(gameRule, generateRound);

export { gameRule, generateRound, generateFinalGame };
