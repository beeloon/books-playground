const quicksort = (array) => {
  if (array.length < 2) return array;

  const pivot = array[0];
  const less = [];
  const greather = [];

  for (const val of array.slice(1))
    pivot > val ? less.push(val) : greather.push(val);

  return [...quicksort(less), pivot, ...quicksort(greather)];
};

console.log(quicksort([4, 68, 3, 2, 88, 56]));
