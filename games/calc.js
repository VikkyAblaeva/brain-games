import readlineSync from 'readline-sync';
import random from '../src/random.js';

const gameCalc = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello,  ${userName}!`);
  let result = [];
  let userQuestion = [];
  let finish = '';
  const operands = '+-*';
  let a = 0;
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    result = [];
    userQuestion = [random(10), operands[random(3)], random(10)];

    if (userQuestion[1] === '+') {
      a = Number(userQuestion[0]) + Number(userQuestion[2]);
    }
    if (userQuestion[1] === '-') {
      a = Number(userQuestion[0]) - Number(userQuestion[2]);
    }
    if (userQuestion[1] === '*') {
      a = Number(userQuestion[0]) * Number(userQuestion[2]);
    }
    result.push(a);
    console.log(`Question: ${userQuestion[0]} ${userQuestion[1]} ${userQuestion[2]}`);
    result.push(Number(readlineSync.question('You answer: ')));
    if (result[1] === result[0]) {
      console.log('Correct!');
    } else {
      finish = `'${result[1]}' is wrong answer ;(. Correct answer was '${result[0]}'\nLet's try again, ${userName}`;
      console.log(finish);
      return finish;
    }
  }
  finish = `Congratulations, ${userName}!`;
  console.log(finish);
  return finish;
};

export default gameCalc;
