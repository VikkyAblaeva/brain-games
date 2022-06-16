const random = (a) => {
  const beginOfRandom = 2;
  const number = Math.floor(Math.random() * a + beginOfRandom);
  return number;
};
export default random;
