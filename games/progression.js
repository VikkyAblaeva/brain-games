import readlineSync from 'readline-sync';
import random from '../src/random.js';
import {
  arrayProgression, welcome, hello, win, noWin,
} from '../src/index.js';

const gameProgression = () => {
  welcome();
  const userName = readlineSync.question('May I have your name? ');
  hello(userName);
  console.log('What number is missing in the progression?');
  let str = '';
  let array = [];
  let secretElement = 0;
  let userAnswer;
  let secretItem = 0;
  for (let i = 0; i < 3; i += 1) {
    array = arrayProgression();
    secretElement = random(10);
    secretItem = array[secretElement];
    array[secretElement] = '..';
    str = array.join(' ');
    console.log(`Question: ${str}`);
    userAnswer = readlineSync.question('Your answer: ');
    if (Number(userAnswer) === secretItem) {
      console.log('Correct!');
    } else {
      return noWin(userAnswer, secretItem, userName);
    }
  }
  return win(userName);
};
export default gameProgression;
