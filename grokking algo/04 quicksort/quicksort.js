const quicksort = (arr) => {
  if (arr.length < 2) return arr;

  const pivot = arr[0];
  const less = [];
  const greater = [];

  for (const val of arr.slice(1))
    pivot > val ? less.push(val) : greater.push(val);

  return [...quicksort(less), pivot, ...quicksort(greater)];
};

const qsort = (arr) => {
  if (arr.length < 2) return arr;

  const pivot = arr[Math.floor(Math.random() * arr.length)];
  const less = arr.filter((value) => value < pivot);
  const greater = arr.filter((value) => value > pivot);

  return [...qsort(less), pivot, ...qsort(greater)];
};

const RANDOM_ARRAY_LENGTH = 1000;
const randomArray = Array.from({ length: RANDOM_ARRAY_LENGTH }, () =>
  Math.floor(Math.random() * RANDOM_ARRAY_LENGTH)
);

// Example from Digital Ocean
const pivot = (arr, start = 0, end = arr.length) => {
  const swap = (list, a, b) => ([list[a], list[b]] = [list[b], list[a]]);

  let pivot = arr[start],
    pointer = start;

  for (let i = start; i < end; i++) {
    if (arr[i] < pivot) {
      pointer++;
      swap(arr, pointer, i);
    }
  }
  swap(arr, start, pointer);

  return pointer;
};

const quickSort = (arr, start = 0, end = arr.length) => {
  let pivotIndex = pivot(arr, start, end);

  if (start >= end) return arr;
  quickSort(arr, start, pivotIndex);
  quickSort(arr, pivotIndex + 1, end);

  return arr;
};

console.log(`
From:
${randomArray.length}

To:
${quickSort(randomArray).length}
`);
