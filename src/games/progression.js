import getRandomNumber from '../utils.js';
import { generateGameLogic } from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const generateProgression = () => {
  const beginOfRandom = 1;
  const endOfArrayProgression = 9;
  const stepProgression = 6;
  const randomForNewItem = 10;
  let newitem = getRandomNumber(beginOfRandom, randomForNewItem);
  const step = getRandomNumber(beginOfRandom, stepProgression);
  const progression = [];
  progression.push(newitem);
  for (let i = 0; i < endOfArrayProgression; i += 1) {
    newitem += step;
    progression.push(newitem);
  }
  return progression;
};

const generateRound = () => {
  const rangeOfRandom = 9;
  const beginOfRandom = 0;
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

export default startProgressionGame;
