import getRandomNumber from '../utils.js';
import { generateGameLogic } from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const generateProgression = () => {
  const minOfRandom = 1;
  const maxOfArrayProgression = 9;
  const stepProgression = 6;
  const randomForNewItem = 10;
  let newitem = getRandomNumber(minOfRandom, randomForNewItem);
  const step = getRandomNumber(minOfRandom, stepProgression);
  const progression = [];
  progression.push(newitem);
  for (let i = 0; i < maxOfArrayProgression; i += 1) {
    newitem += step;
    progression.push(newitem);
  }
  return progression;
};

const generateRound = () => {
  const maxOfRandom = 9;
  const minOfRandom = 0;
  const progression = generateProgression();
  const secretElement = getRandomNumber(minOfRandom, maxOfRandom);
  const secretItem = progression[secretElement];
  progression[secretElement] = '..';
  const strOfProgression = progression.join(' ');
  console.log(`Question: ${strOfProgression}`);
  const rightAnswer = String(secretItem);
  return rightAnswer;
};

const startProgressionGame = () => generateGameLogic(gameDescription, generateRound);

export default startProgressionGame;
