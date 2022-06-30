import { getRandomNumber } from '../utils.js';
import { generateGameLogic } from '../index.js';

const gameDescription = 'What is the result of the expression?';
const rangeOfRandomNumber = 20;
const beginOfRandom = 0;
const operands = '+-*';
const rangeOfRandomOperands = 2;

const getCalculatorResult = (firstNumber, secondNumber, operand) => {
  switch (operand) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error(`Unknown operand: '${operand}'!`);
  }
};

const generateRound = () => {
  const operand = operands[getRandomNumber(beginOfRandom, rangeOfRandomOperands)];
  const firstNumber = getRandomNumber(beginOfRandom, rangeOfRandomNumber);
  const secondNumber = getRandomNumber(beginOfRandom, rangeOfRandomNumber);
  const resultOfOperation = String(getCalculatorResult(firstNumber, secondNumber, operand));
  console.log(`Question: ${firstNumber} ${operand} ${secondNumber}`);
  return resultOfOperation;
};

const startCalcGame = () => generateGameLogic(gameDescription, generateRound);

export { gameDescription, generateRound, startCalcGame };
