import readlineSync from 'readline-sync';
import random from '../src/random.js';

const gameGcd = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello,  ${userName}!`);
  console.log('Find the greatest common divisor of given numbers.');
  let min = 0;
  let maxGcd = 0;
  let array = [];
  let userAnswer = 0;
  let finish = '';
  for (let j = 0; j < 3; j += 1) {
    array = [];
    array = [random(20) + 1, random(15) + 1];
    if (array[0] < array[1]) {
      min = array[0];
    } else {
      min = array[1];
    }
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
      finish = `'${userAnswer}' is wrong answer ;(. Correct answer was '${maxGcd}'.\nLet's try again, ${userName}!`;
      console.log(finish);
      return finish;
    }
  }
  finish = `Congratulations, ${userName}!`;
  console.log(finish);
  return finish;
};

export default gameGcd;
