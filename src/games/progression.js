import { getRandomNumber, generateProgression } from '../utils.js';
import { answerOfUser } from '../index.js';

const gamePhrase = 'What number is missing in the progression?';
const rangeOfRandom = 9;

const generateRound = () => {
  const userAnswerAndCorrectAnswer = [];
  const progression = generateProgression();
  const secretElement = getRandomNumber(rangeOfRandom);
  const secretItem = progression[secretElement];
  progression[secretElement] = '..';
  const strOfProgression = progression.join(' ');
  console.log(`Question: ${strOfProgression}`);
  const userAnswer = answerOfUser();
  userAnswerAndCorrectAnswer.push(secretItem);
  userAnswerAndCorrectAnswer.push(Number(userAnswer));
  return userAnswerAndCorrectAnswer;
};

export { gamePhrase, generateRound };
