import { getRandomNumber, generateProgression } from '../utils.js';
import { getUserAnswer, generateGameLogic } from '../index.js';

const gamePhrase = 'What number is missing in the progression?';
const rangeOfRandom = 9;
const beginOfRandom = 0;

const generateRound = () => {
  const userAnswerAndCorrectAnswer = [];
  const progression = generateProgression();
  const secretElement = getRandomNumber(beginOfRandom, rangeOfRandom);
  const secretItem = progression[secretElement];
  progression[secretElement] = '..';
  const strOfProgression = progression.join(' ');
  console.log(`Question: ${strOfProgression}`);
  const userAnswer = getUserAnswer();
  userAnswerAndCorrectAnswer.push(secretItem);
  userAnswerAndCorrectAnswer.push(Number(userAnswer));
  return userAnswerAndCorrectAnswer;
};

const generateFinalGame = () => generateGameLogic(gamePhrase, generateRound);

export { gamePhrase, generateRound, generateFinalGame };
