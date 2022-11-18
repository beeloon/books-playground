const countdown = (i) => {
  console.log(i);

  if (i <= 0) return;
  countdown(i - 1);
};

const fact = (x) => {
  if (x == 1) return 1;
  return x * fact(x - 1);
};
