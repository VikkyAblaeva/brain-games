import { getRandomNumber, generateProgression } from '../utils.js';
import { answerOfUser } from '../index.js';

const gamePhrase = 'What number is missing in the progression?';
let strOfProgression = '';
let progression = [];
let secretElement = 0;
let userAnswer;
let secretItem = 0;
const rangeOfRandom = 9;
let userAnswerAndCorrectAnswer = [];

const generateRound = () => {
  userAnswerAndCorrectAnswer = [];
  progression = generateProgression();
  secretElement = getRandomNumber(rangeOfRandom);
  secretItem = progression[secretElement];
  progression[secretElement] = '..';
  strOfProgression = progression.join(' ');
  console.log(`Question: ${strOfProgression}`);
  userAnswer = answerOfUser();
  userAnswerAndCorrectAnswer.push(secretItem);
  userAnswerAndCorrectAnswer.push(Number(userAnswer));
  return userAnswerAndCorrectAnswer;
};

export { gamePhrase, generateRound };
