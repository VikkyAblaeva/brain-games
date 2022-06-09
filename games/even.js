import readlineSync from 'readline-sync';
import random from '../src/random.js';

const game = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello,  ${userName}!`);
  let finish = '';
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
      finish = `'${result[1]}' is wrong answer ;(. Correct answer was '${result[0]}'\nLet's try again, ${userName}`;
      console.log(finish);
      return finish;
    }
  }
  finish = `Congratulations, ${userName}!`;
  console.log(finish);
  return finish;
};

export default game;
