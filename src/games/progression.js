import getRandomNumber from '../utils.js';
import { startGame } from '../index.js';

const gameDescription = 'What number is missing in the progression?';
const maxOfRandomNumber = 9;

const generateProgression = () => {
  const minOfRandomNumber = 1;
  const maxStepProgression = 6;
  const maxRandomForinitialNumber = 10;
  let initialNumber = getRandomNumber(minOfRandomNumber, maxRandomForinitialNumber);
  const step = getRandomNumber(minOfRandomNumber, maxStepProgression);
  const progression = [];
  progression.push(initialNumber);
  for (let i = 0; i < maxOfRandomNumber; i += 1) {
    initialNumber += step;
    progression.push(initialNumber);
  }
  return progression;
};

const generateRound = () => {
  const minOfRandomNumber = 0;
  const progression = generateProgression();
  const secretIndex = getRandomNumber(minOfRandomNumber, maxOfRandomNumber);
  const secretItem = progression[secretIndex];
  progression[secretIndex] = '..';
  const question = `Question: ${progression.join(' ')}`;
  const rightAnswer = String(secretItem);
  const questionAnswer = [question, rightAnswer];
  return questionAnswer;
};

const playProgressionGame = () => startGame(gameDescription, generateRound);

export default playProgressionGame;
