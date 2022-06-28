import { getRandomNumber, isEven } from '../utils.js';
import { generateGameLogic } from '../index.js';

const gamePhrase = 'Answer "yes" if the number is even, otherwise answer "no".';
const rangeOfRandom = 100;
const beginOfRandom = 0;

const generateRound = () => {
  let rightAnswer = '';
  const userQuestion = getRandomNumber(beginOfRandom, rangeOfRandom);
  console.log(`Question: ${userQuestion}`);
  if (isEven(userQuestion)) {
    rightAnswer = 'yes';
  } else {
    rightAnswer = 'no';
  }
  return rightAnswer;
};

const generateFinalGame = () => generateGameLogic(gamePhrase, generateRound);

export { gamePhrase, generateRound, generateFinalGame };
