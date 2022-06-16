import random from './random.js';

const generateProgression = () => {
  const endOfArray = 9;
  const stepProgression = 6;
  const randomeForNewItem = 10;
  let newitem = random(randomeForNewItem) + 1;
  const step = random(stepProgression) + 1;
  const array = [];
  array.push(newitem);
  for (let i = 0; i < endOfArray; i += 1) {
    newitem += step;
    array.push(newitem);
  }
  return array;
};

const isPrime = (number) => {
  let divisiors = 0;
  let finishOfFunction;
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      divisiors += 1;
    }
  }
  if (divisiors === 0) {
    finishOfFunction = 'yes';
  } else {
    finishOfFunction = 'no';
  }
  return finishOfFunction;
};

const initialGreeting = () => {
  console.log('Welcome to the Brain Games!');
};

const greetingWithName = (nameOfUser) => {
  console.log(`Hello,  ${nameOfUser}!`);
};

const winOfUser = (nameOfUser) => {
  console.log(`Congratulations, ${nameOfUser}!`);
};

const noWinOfUser = (userAnswer, correctAnswer, nameOfUser) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${nameOfUser}!`);
};

export {
  generateProgression,
  isPrime,
  initialGreeting,
  greetingWithName,
  winOfUser,
  noWinOfUser,
};
