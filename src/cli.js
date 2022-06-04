import readlineSync from "readline-sync";
const greeting = () => {
  const userName = readlineSync.question("May I have your name? ");
  let result = "Hello, " + userName + "!";
  return result;
};
export default greeting;
