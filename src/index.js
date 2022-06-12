import random from './random.js';

const arrayProgression = () => {
  let newitem = random(10) + 1;
  const step = random(6) + 1;
  const array = [];
  array.push(newitem);
  for (let i = 0; i < 9; i += 1) {
    newitem += step;
    array.push(newitem);
  }
  return array;
};

const prime = (number) => {
  let divisiors = 0;
  let finish;
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      divisiors += 1;
    }
  }
  if (divisiors === 0) {
    finish = 'yes';
  } else {
    finish = 'no';
  }
  return finish;
};

const welcome = () => {
  console.log('Welcome to the Brain Games!');
};

const hello = (nameOfUser) => {
  console.log(`Hello,  ${nameOfUser}!`);
};

const win = (nameOfUser) => {
  console.log(`Congratulations, ${nameOfUser}!`);
};

const noWin = (userAnswer, correctAnswer, nameOfUser) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${nameOfUser}!`);
};

export {
  arrayProgression, prime, welcome, hello, win, noWin,
};
