import { getRandomNumber, isEven } from '../utils.js';
import { getUserAnswer, generateGameLogic } from '../index.js';

const gamePhrase = 'Answer "yes" if the number is even, otherwise answer "no".';
const rangeOfRandom = 100;
const beginOfRandom = 0;

const generateRound = () => {
  const userQuestion = getRandomNumber(beginOfRandom, rangeOfRandom);
  console.log(`Question: ${userQuestion}`);
  const correctAnswerWithUserAnswer = [];
  if (isEven(userQuestion)) {
    correctAnswerWithUserAnswer.push('yes');
  } else {
    correctAnswerWithUserAnswer.push('no');
  }
  const userAnswer = getUserAnswer();
  correctAnswerWithUserAnswer.push(userAnswer);
  return correctAnswerWithUserAnswer;
};

const generateFinalGame = () => generateGameLogic(gamePhrase, generateRound);

export { gamePhrase, generateRound, generateFinalGame };
