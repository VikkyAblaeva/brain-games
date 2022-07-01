import getRandomNumber from '../utils.js';
import { startGame } from '../index.js';

const gameDescription = 'What is the result of the expression?';
const maxOfRandomNumber = 20;
const minOfRandomNumber = 0;
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
  const operand = operands[getRandomNumber(minOfRandomNumber, rangeOfRandomOperands)];
  const firstNumber = getRandomNumber(minOfRandomNumber, maxOfRandomNumber);
  const secondNumber = getRandomNumber(minOfRandomNumber, maxOfRandomNumber);
  const rightAnswer = String(getCalculatorResult(firstNumber, secondNumber, operand));
  const question = `Question: ${firstNumber} ${operand} ${secondNumber}`;
  const questionAnswer = [question, rightAnswer];
  return questionAnswer;
};

const playCalcGame = () => startGame(gameDescription, generateRound);

export default playCalcGame;
