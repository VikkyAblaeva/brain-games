import readlineSync from 'readline-sync';
import { getRandomNumber } from '../utils.js';
import {
  initialGreeting,
  greetingWithName,
  winOfUser,
  noWinOfUser,
} from '../index.js';

const game = () => {
  initialGreeting();
  const userName = readlineSync.question('May I have your name? ');
  greetingWithName(userName);
  let userAnswerAndCorrectAnswer = [];
  const rangeOfRandom = 100;
  let userQuestion = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    userQuestion = getRandomNumber(rangeOfRandom);
    userAnswerAndCorrectAnswer = [];
    if (userQuestion % 2 === 0) {
      userAnswerAndCorrectAnswer.push('yes');
    } else {
      userAnswerAndCorrectAnswer.push('no');
    }
    console.log(`Question: ${userQuestion}`);
    userAnswerAndCorrectAnswer.push(readlineSync.question('You answer: '));
    if (userAnswerAndCorrectAnswer[1] === userAnswerAndCorrectAnswer[0]) {
      console.log('Correct!');
    } else {
      return noWinOfUser(userAnswerAndCorrectAnswer[1], userAnswerAndCorrectAnswer[0], userName);
    }
  }
  return winOfUser(userName);
};

export default game;
