import readlineSync from 'readline-sync';

const greeting = () => {
  const userName = readlineSync.question('May I have your name? ');
  const result = `Hello,  ${userName}!`;
  return result;
};
export default greeting;
