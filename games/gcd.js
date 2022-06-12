import readlineSync from 'readline-sync';
import random from '../src/random.js';
import {
  welcome, hello, win, noWin,
} from '../src/index.js';

const gameGcd = () => {
  welcome();
  const userName = readlineSync.question('May I have your name? ');
  hello(userName);
  console.log('Find the greatest common divisor of given numbers.');
  let min = 0;
  let maxGcd = 0;
  let array = [];
  let userAnswer = 0;
  for (let j = 0; j < 3; j += 1) {
    array = [];
    array = [random(20) + 1, random(15) + 1];
    min = Math.min.apply(null, array);
    console.log(`Question: ${array[0]} ${array[1]}`);
    userAnswer = readlineSync.question('Your answer: ');
    for (let i = 1; i <= min; i += 1) {
      if (array[0] % i === 0 && array[1] % i === 0) {
        maxGcd = i;
      }
    }
    if (Number(userAnswer) === maxGcd) {
      console.log('Correct!');
    } else {
      return noWin(userAnswer, maxGcd, userName);
    }
  }
  return win(userName);
};

export default gameGcd;
