const getRandomNumber = (rangeOfRandom) => {
  const number = Math.floor(Math.random() * rangeOfRandom);
  return number;
};

const isPrime = (number) => {
  let divisiors = 0;
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      divisiors += 1;
    }
  }
  return divisiors === 0;
};

const generateProgression = () => {
  const beginOfRandome = 1;
  const endOfArray = 9;
  const stepProgression = 6;
  const randomeForNewItem = 10;
  let newitem = getRandomNumber(randomeForNewItem) + beginOfRandome;
  const step = getRandomNumber(stepProgression) + beginOfRandome;
  const array = [];
  array.push(newitem);
  for (let i = 0; i < endOfArray; i += 1) {
    newitem += step;
    array.push(newitem);
  }
  return array;
};

const isEven = (number) => number % 2 === 0;

export {
  getRandomNumber,
  isPrime,
  generateProgression,
  isEven,
};
