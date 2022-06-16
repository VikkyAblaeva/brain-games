import readlineSync from 'readline-sync';
import random from '../random.js';
import {
  initialGreeting,
  greetingWithName,
  winOfUser,
  noWinOfUser,
} from '../index.js';

const gameGcd = () => {
  initialGreeting();
  const userName = readlineSync.question('May I have your name? ');
  greetingWithName(userName);
  console.log('Find the greatest common divisor of given numbers.');
  let min = 0;
  let maxGcd = 0;
  const rangeOfRandom = 20;
  let divisibleNumbers = [];
  let userAnswer = 0;
  for (let j = 0; j < 3; j += 1) {
    divisibleNumbers = [];
    divisibleNumbers = [random(rangeOfRandom) + 1, random(rangeOfRandom) + 1];
    min = Math.min.apply(null, divisibleNumbers);
    console.log(`Question: ${divisibleNumbers[0]} ${divisibleNumbers[1]}`);
    userAnswer = readlineSync.question('Your answer: ');
    for (let i = 1; i <= min; i += 1) {
      if (divisibleNumbers[0] % i === 0 && divisibleNumbers[1] % i === 0) {
        maxGcd = i;
      }
    }
    if (Number(userAnswer) === maxGcd) {
      console.log('Correct!');
    } else {
      return noWinOfUser(userAnswer, maxGcd, userName);
    }
  }
  return winOfUser(userName);
};

export default gameGcd;
