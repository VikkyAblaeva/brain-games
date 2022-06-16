import readlineSync from 'readline-sync';
import random from '../random.js';
import {
  generateProgression,
  initialGreeting,
  greetingWithName,
  winOfUser,
  noWinOfUser,
} from '../index.js';

const gameProgression = () => {
  initialGreeting();
  const userName = readlineSync.question('May I have your name? ');
  greetingWithName(userName);
  console.log('What number is missing in the progression?');
  let strOfProgression = '';
  let progression = [];
  let secretElement = 0;
  let userAnswer;
  let secretItem = 0;
  const rangeOfRandom = 9;
  for (let i = 0; i < 3; i += 1) {
    progression = generateProgression();
    secretElement = random(rangeOfRandom);
    secretItem = progression[secretElement];
    progression[secretElement] = '..';
    strOfProgression = progression.join(' ');
    console.log(`Question: ${strOfProgression}`);
    userAnswer = readlineSync.question('Your answer: ');
    if (Number(userAnswer) === secretItem) {
      console.log('Correct!');
    } else {
      return noWinOfUser(userAnswer, secretItem, userName);
    }
  }
  return winOfUser(userName);
};
export default gameProgression;
