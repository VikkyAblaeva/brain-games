import readlineSync from 'readline-sync';
import random from '../src/random.js';
import {
  welcome, hello, win, noWin,
} from '../src/index.js';

const game = () => {
  welcome();
  const userName = readlineSync.question('May I have your name? ');
  hello(userName);
  let result = [];
  let userQuestion = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    userQuestion = random(100);
    result = [];
    if (userQuestion % 2 === 0) {
      result.push('yes');
    } else {
      result.push('no');
    }
    console.log(`Question: ${userQuestion}`);
    result.push(readlineSync.question('You answer: '));
    if (result[1] === result[0]) {
      console.log('Correct!');
    } else {
      return noWin(result[1], result[0], userName);
    }
  }
  return win(userName);
};

export default game;
