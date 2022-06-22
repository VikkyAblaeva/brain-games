import { getRandomNumber, isPrime } from '../utils.js';
import { answerOfUser } from '../index.js';

const gamePhrase = 'Answer "yes" if given number is prime. Otherwise answer "no".';
let userAnswer = '';
const beginOfRandome = 2;
const rangeOfRandom = 20;
let userAnswerAndCorrectAnswer = [];

const generateRound = () => {
  userAnswerAndCorrectAnswer = [];
  const userNumber = getRandomNumber(rangeOfRandom) + beginOfRandome;
  userAnswerAndCorrectAnswer.push(isPrime(userNumber));
  console.log(`Question: ${userNumber}`);
  userAnswer = answerOfUser();
  userAnswerAndCorrectAnswer.push(userAnswer);
  return userAnswerAndCorrectAnswer;
};

export { gamePhrase, generateRound };
