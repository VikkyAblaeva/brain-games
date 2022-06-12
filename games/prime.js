import readlineSync from 'readline-sync';
import random from '../src/random.js';
import { prime } from '../src/index.js';

const primeOrNot = () => {
  let userAnswer;
  let finish;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const userNumber = random(20) + 2;
    console.log(`Question: ${userNumber}`);
    userAnswer = readlineSync.question('Your answer: ');
    if ((prime(userNumber) === 'yes' && userAnswer === 'yes') || (prime(userNumber) === 'no' && userAnswer === 'no')) {
      console.log('Correct!');
    } else {
      finish = `'${userAnswer}' is wrong answer ;(. Correct answer was '${prime(userNumber)}'.\nLet's try again, ${userName}!`;
      console.log(finish);
      return finish;
    }
  }
  finish = `Congratulations, ${userName}!`;
  console.log(finish);
  return finish;
};

export default primeOrNot;
