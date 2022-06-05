#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greeting, userName } from '../src/cli.js';

const even = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let result = '';
  let userQuestion = 0;
  let yesOrNo = '';
  let exit = '';
  for (let i = 1; i < 4; i = i + 1) {
    userQuestion = Math.floor(Math.random() * 100);
    console.log(`Question: ${userQuestion}`);
    result = readlineSync.question('You answer: ');
    if (userQuestion % 2 === 0) {
      yesOrNo = 'yes';
    } else {
      yesOrNo = 'no';
    }
    if (
      (result === 'yes' && userQuestion % 2 === 0) ||
      (result === 'no' && userQuestion % 2 !== 0)
    ) {
      console.log('Correct!');
    } else {
      exit = `'${result}' is wrong answer ;(. Correct answer was '${yesOrNo}'\nLet's try again, ${userName}!`;
      return exit;
    }
  }
  return `Congratulations, ${userName}!`;
};

console.log('Welcome to the Brain Games!');
console.log(greeting());
console.log(even());
