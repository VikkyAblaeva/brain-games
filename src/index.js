import random from './random.js';

const arrayProgression = () => {
  let newitem = random(10) + 1;
  const step = random(6) + 1;
  const array = [];
  array.push(newitem);
  for (let i = 0; i < 9; i += 1) {
    newitem += step;
    array.push(newitem);
  }
  return array;
};

export default arrayProgression;
