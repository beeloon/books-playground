const sum = (array) => {
  if (!array.length) return 0;

  return array[0] + sum(array.slice(1));
};

const count = (array) => {
  if (!array.length) return 0;

  return 1 + count(array.slice(1));
};

const max = (array) => {
  if (array.length == 2) return array[0] > array[1] ? array[0] : array[1];
  const subMax = max(array.slice(1));
  return array[0] > subMax ? array[0] : subMax;
};
