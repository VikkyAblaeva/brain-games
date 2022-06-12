import readlineSync from 'readline-sync';
import random from '../src/random.js';
import {
  prime, welcome, hello, win, noWin,
} from '../src/index.js';

const primeOrNot = () => {
  let userAnswer;
  welcome();
  const userName = readlineSync.question('May I have your name? ');
  hello(userName);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const userNumber = random(20) + 2;
    console.log(`Question: ${userNumber}`);
    userAnswer = readlineSync.question('Your answer: ');
    if (
      (prime(userNumber) === 'yes' && userAnswer === 'yes')
      || (prime(userNumber) === 'no' && userAnswer === 'no')
    ) {
      console.log('Correct!');
    } else {
      return noWin(userAnswer, prime(userNumber), userName);
    }
  }
  return win(userName);
};

export default primeOrNot;
