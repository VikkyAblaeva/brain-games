import readlineSync from 'readline-sync';
import random from '../src/random.js';

const game = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello,  ${userName}!`);
  let result = [];
  let userQuestion = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  //вопрос-ответ
  for (let i = 0; i < 3; i += 1) {
    userQuestion = random(100);
    result = [];
    //формирование массива с результатом

    if (userQuestion % 2 === 0) {
      result.push('yes');
    } else {
      result.push('no');
    }
    console.log(`Question: ${userQuestion}`);
    result.push(readlineSync.question('You answer: '));
    //проверка
    if (result[1] === result[0]) {
      console.log('Correct!');
    } else {
      console.log(
        `'${result[1]}' is wrong answer ;(. Correct answer was '${result[0]}'\nLet's try again, ${userName}`
      );
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
  return;
};

export default game;
