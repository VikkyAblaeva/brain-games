import { getRandomNumber, isEven } from '../utils.js';
import { answerOfUser } from '../index.js';

const gamePhrase = 'Answer "yes" if the number is even, otherwise answer "no".';
const rangeOfRandom = 100;

const generateRound = () => {
  const userQuestion = getRandomNumber(rangeOfRandom);
  console.log(`Question: ${userQuestion}`);
  const evenOrNot = isEven(userQuestion);
  const userAnswer = answerOfUser();
  const correctAnswerWithUserAnswer = [];
  correctAnswerWithUserAnswer.push(evenOrNot);
  correctAnswerWithUserAnswer.push(userAnswer);
  return correctAnswerWithUserAnswer;
};

export { gamePhrase, generateRound };
