import readlineSync from 'readline-sync';
import random from '../random.js';
import {
  initialGreeting,
  greetingWithName,
  winOfUser,
  noWinOfUser,
} from '../index.js';

const gameCalc = () => {
  initialGreeting();
  const userName = readlineSync.question('May I have your name? ');
  greetingWithName(userName);
  let userAnswerAndCorrectAnswer = [];
  let userQuestion = [];
  const operands = '+-*';
  let resultOfOperation = 0;
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    userAnswerAndCorrectAnswer = [];
    userQuestion = [random(10), operands[random(3)], random(10)];

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
    userAnswerAndCorrectAnswer.push(Number(readlineSync.question('You answer: ')));
    if (userAnswerAndCorrectAnswer[1] === userAnswerAndCorrectAnswer[0]) {
      console.log('Correct!');
    } else {
      return noWinOfUser(userAnswerAndCorrectAnswer[1], userAnswerAndCorrectAnswer[0], userName);
    }
  }
  return winOfUser(userName);
};

export default gameCalc;
