const fibs = (n) => {
  let result = [];

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      result.push(0);
    } else if (i === 1) {
      result.push(1);
    } else {
      result.push(result[i - 2] + result[i - 1]);
    }
  }

  return result;
};

const fibsRec = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibsRec(n - 1) + fibsRec(n - 2);
};

console.log(fibs(8));
console.log(fibsRec(5));
