function getLowerAndHigherNumber(arr) {
  let lowestNumber = arr[0];
  let highestNumber = arr[0];

  for (let i = 0; i < arr.length; i++) {
    const currentNumber = arr[i];
    if (typeof currentNumber !== "number") continue;
    console.log(currentNumber);
    if (lowestNumber > currentNumber) {
      lowestNumber = currentNumber;
    } else if (highestNumber < currentNumber) {
      highestNumber = currentNumber;
    }
  }

  return `lowest number: ${lowestNumber} and highest number: ${highestNumber}`;
}

console.log(getLowerAndHigherNumber([2, -2, "hello", 45, 23])); // output: lowest number: -2 and highest number: 45
