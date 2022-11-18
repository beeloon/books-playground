const findSmallest = (array) => {
  let smallest = array[0];
  let smallestIdx = 0;

  array.forEach((item, idx) => {
    if (item < smallest) {
      smallest = item;
      smallestIdx = idx;
    }
  });

  return smallestIdx;
};

const selectionSort = (array) => {
  const newArray = [];

  while (array.length > 0) {
    const smallest = findSmallest(array);
    newArray.push(array.splice(smallest, 1)[0]);
  }

  return newArray;
};

console.log(selectionSort([5, 4, 3, 6, 7, 8]));
