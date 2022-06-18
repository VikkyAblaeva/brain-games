const initialGreeting = () => {
  console.log('Welcome to the Brain Games!');
};

const greetingWithName = (nameOfUser) => {
  console.log(`Hello, ${nameOfUser}!`);
};

const winOfUser = (nameOfUser) => {
  console.log(`Congratulations, ${nameOfUser}!`);
};

const noWinOfUser = (userAnswer, correctAnswer, nameOfUser) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${nameOfUser}!`);
};

export {
  initialGreeting,
  greetingWithName,
  winOfUser,
  noWinOfUser,
};
