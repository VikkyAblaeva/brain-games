const getRandomNumber = (minOfRandom, maxOfRandom) => {
  const number = Math.floor(Math.random() * maxOfRandom) + minOfRandom;
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
  const beginOfRandom = 1;
  const endOfArrayProgression = 9;
  const stepProgression = 6;
  const randomForNewItem = 10;
  let newitem = getRandomNumber(beginOfRandom, randomForNewItem);
  const step = getRandomNumber(beginOfRandom, stepProgression);
  const progression = [];
  progression.push(newitem);
  for (let i = 0; i < endOfArrayProgression; i += 1) {
    newitem += step;
    progression.push(newitem);
  }
  return progression;
};

const findGcd = (numbers) => {
  let maxGcd = 0;
  const min = Math.min.apply(null, numbers);
  for (let i = 1; i <= min; i += 1) {
    if (numbers[0] % i === 0 && numbers[1] % i === 0) {
      maxGcd = i;
    }
  }
  return maxGcd;
};

const isEven = (number) => number % 2 === 0;

export {
  getRandomNumber,
  isPrime,
  generateProgression,
  isEven,
  findGcd,
};
