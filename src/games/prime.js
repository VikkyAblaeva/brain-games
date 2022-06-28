import { getRandomNumber, isPrime } from '../utils.js';
import { getUserAnswer, generateGameLogic } from '../index.js';

const gamePhrase = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const beginOfRandom = 2;
const rangeOfRandom = 20;

const generateRound = () => {
  const userAnswerAndCorrectAnswer = [];
  const userNumber = getRandomNumber(beginOfRandom, rangeOfRandom);
  userAnswerAndCorrectAnswer.push(isPrime(userNumber) ? 'yes' : 'no');
  console.log(`Question: ${userNumber}`);
  const userAnswer = getUserAnswer();
  userAnswerAndCorrectAnswer.push(userAnswer);
  return userAnswerAndCorrectAnswer;
};

const generateFinalGame = () => generateGameLogic(gamePhrase, generateRound);

export { gamePhrase, generateRound, generateFinalGame };
