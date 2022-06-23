import { getRandomNumber, isEven } from '../utils.js';
import { answerOfUser } from '../index.js';

const gamePhrase = 'Answer "yes" if the number is even, otherwise answer "no".';
const rangeOfRandom = 100;

const generateRound = () => {
  const userQuestion = getRandomNumber(rangeOfRandom);
  console.log(`Question: ${userQuestion}`);
  const correctAnswerWithUserAnswer = [];
  if (isEven(userQuestion)) {
    correctAnswerWithUserAnswer.push('yes');
  } else {
    correctAnswerWithUserAnswer.push('no');
  }
  const userAnswer = answerOfUser();
  correctAnswerWithUserAnswer.push(userAnswer);
  return correctAnswerWithUserAnswer;
};

export { gamePhrase, generateRound };
