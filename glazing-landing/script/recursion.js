const pow = (x, n) => {
  let result = 1;

  console.log(x, n);
  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
};

console.log(pow(2, 4));

const powRecursion = (x, n) => {
  return n === 1 ? x : x * powRecursion(x, n - 1);
};

console.log(powRecursion(2, 5));
