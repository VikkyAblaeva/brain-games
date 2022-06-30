import getRandomNumber from '../utils.js';
import { generateGameLogic } from '../index.js';

const gameDescription = 'What is the result of the expression?';
const maxOfRandom = 20;
const minOfRandom = 0;
const operands = ['+', '-', '*'];
const rangeOfRandomOperands = operands.length;

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
  const operand = operands[getRandomNumber(minOfRandom, rangeOfRandomOperands)];
  const firstNumber = getRandomNumber(minOfRandom, maxOfRandom);
  const secondNumber = getRandomNumber(minOfRandom, maxOfRandom);
  const resultOfOperation = String(getCalculatorResult(firstNumber, secondNumber, operand));
  console.log(`Question: ${firstNumber} ${operand} ${secondNumber}`);
  return resultOfOperation;
};

const startCalcGame = () => generateGameLogic(gameDescription, generateRound);

export default startCalcGame;
