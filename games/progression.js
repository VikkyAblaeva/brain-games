import readlineSync from 'readline-sync';
import random from '../src/random.js';
import { arrayProgression } from '../src/index.js';

const gameProgression = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What number is missing in the progression?');
  let str = '';
  let array = [];
  let secretElement = 0;
  let userAnswer;
  let finish = '';
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
      finish = `'${userAnswer}' is wrong answer ;(. Correct answer was '${secretItem}'.\nLet's try again, ${userName}!`;
      console.log(finish);
      return finish;
    }
  }
  finish = `Congratulations, ${userName}!`;
  console.log(finish);
  return finish;
};
export default gameProgression;
