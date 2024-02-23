const countDown = (n) => {
  console.log(n);
  n--;
  if (n > 0) {
    countDown(n);
  }
};
// countDown(5); // output : 5, 4, 3, 2, 1

const sumOfNumber = (n) => {
  if (n <= 0) {
    return 0;
  } else {
    return n + sumOfNumber(n - 1);
  }
};
// console.log(sumOfNumber(3)); // output: 6

const array = new Array(3000).fill(1);
const sumOfArrayUsingForLp = (arr) => {
  if (arr.length === 0) return 0;
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};
const startTimeLp = Date.now();
console.log(sumOfArrayUsingForLp(array)); // output: 10
const endTimeLp = Date.now();
console.log("time complexity loop", endTimeLp - startTimeLp);

const sumOfArrayUsignRecursion = (arr, index) => {
  if (arr.length === index) return 0;
  return arr[index] + sumOfArrayUsignRecursion(arr, index + 1);
};
const startTime = Date.now();
console.log(sumOfArrayUsignRecursion(array, 0));
const endTime = Date.now();
console.log("time complexity recursion", endTime - startTime);
