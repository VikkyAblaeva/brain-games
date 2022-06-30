import { getRandomNumber, generateProgression } from '../utils.js';
import { generateGameLogic } from '../index.js';

const gameDescription = 'What number is missing in the progression?';
const rangeOfRandom = 9;
const beginOfRandom = 0;

const generateRound = () => {
  const progression = generateProgression();
  const secretElement = getRandomNumber(beginOfRandom, rangeOfRandom);
  const secretItem = progression[secretElement];
  progression[secretElement] = '..';
  const strOfProgression = progression.join(' ');
  console.log(`Question: ${strOfProgression}`);
  const rightAnswer = String(secretItem);
  return rightAnswer;
};

const startProgressionGame = () => generateGameLogic(gameDescription, generateRound);

export { gameDescription, generateRound, startProgressionGame };
