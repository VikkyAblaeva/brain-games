import getRandomNumber from '../utils.js';
import { generateGameLogic } from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const generateProgression = () => {
  const minOfRandom = 1;
  const maxOfArrayProgression = 9;
  const maxStepProgression = 6;
  const maxRandomForNewItem = 10;
  let newitem = getRandomNumber(minOfRandom, maxRandomForNewItem);
  const step = getRandomNumber(minOfRandom, maxStepProgression);
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
  const question = `Question: ${strOfProgression}`;
  const rightAnswer = String(secretItem);
  const questionAnswer = [question, rightAnswer];
  return questionAnswer;
};

const startProgressionGame = () => generateGameLogic(gameDescription, generateRound);

export default startProgressionGame;
