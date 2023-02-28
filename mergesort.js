const merge = (a, b) => {
  let arr = [];

  let i = 0;
  let j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      arr.push(a[i]);
      i++;
    } else {
      arr.push(b[j]);
      j++;
    }
  }

  if (i < a.length) {
    arr = arr.concat(a.slice(i));
  } else if (j < b.length) {
    arr = arr.concat(b.slice(j));
  }

  return arr;
};

const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  let left = arr.slice(0, Math.floor(arr.length / 2));
  let right = arr.slice(Math.floor(arr.length / 2));

  left = mergeSort(left);
  right = mergeSort(right);

  arr = merge(left, right);

  return arr;
}

// for testing
const generateRandomArray = (n, min, max) => {
  let arr = [];

  for (let i = 0; i < n; i++) {
    let r = Math.floor(Math.random() * (max - min + 1)) + min;
    arr.push(r);
  }

  return arr;
}

console.log(mergeSort([5, 2, 1, 9, 0, 4]));

let random = generateRandomArray(11, -10, 100);

console.log(random, mergeSort(random));
