import readlineSync from 'readline-sync';
import random from '../random.js';
import {
  isPrime,
  initialGreeting,
  greetingWithName,
  winOfUser,
  noWinOfUser,
} from '../index.js';

const primeOrNot = () => {
  let userAnswer;
  initialGreeting();
  const exceptions = 2;
  const rangeOfRandom = 20;
  const userName = readlineSync.question('May I have your name? ');
  greetingWithName(userName);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const userNumber = random(rangeOfRandom) + exceptions;
    console.log(`Question: ${userNumber}`);
    userAnswer = readlineSync.question('Your answer: ');
    if ((isPrime(userNumber) === 'yes' && userAnswer === 'yes') || (isPrime(userNumber) === 'no' && userAnswer === 'no')) {
      console.log('Correct!');
    } else {
      return noWinOfUser(userAnswer, isPrime(userNumber), userName);
    }
  }
  return winOfUser(userName);
};

export default primeOrNot;
