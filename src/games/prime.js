import { getRandomNumber, isPrime } from '../utils.js';
import { answerOfUser } from '../index.js';

const gamePhrase = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const beginOfRandome = 2;
const rangeOfRandom = 20;

const generateRound = () => {
  const userAnswerAndCorrectAnswer = [];
  const userNumber = getRandomNumber(rangeOfRandom) + beginOfRandome;
  if (isPrime(userNumber) === true) {
    userAnswerAndCorrectAnswer.push('yes');
  } else {
    userAnswerAndCorrectAnswer.push('no');
  }
  console.log(`Question: ${userNumber}`);
  const userAnswer = answerOfUser();
  userAnswerAndCorrectAnswer.push(userAnswer);
  return userAnswerAndCorrectAnswer;
};

export { gamePhrase, generateRound };
