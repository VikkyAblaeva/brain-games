const getRandomNumber = (minOfRandom, maxOfRandom) => {
  const number = Math.floor(Math.random() * maxOfRandom) + minOfRandom;
  return number;
};

export default getRandomNumber;
